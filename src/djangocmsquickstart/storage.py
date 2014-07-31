'''
Created on Oct 14, 2013

@author: lmalave
'''
import mimetypes
import re
from StringIO import StringIO

from django.core.files.base import File, ContentFile
from django.core.files.storage import Storage
from django.forms.fields import FileField
from django.utils.translation import ugettext_lazy as _

from google.appengine.api import images
from google.appengine.ext import blobstore
import cloudstorage as cloudstorage

# import the logging library
import logging

# Get an instance of a logger
logger = logging.getLogger(__name__)

class CloudStorage(Storage):
    """
    Custom storage for Google Cloud Storage
    """
    default_quick_listdir = True
    connection_kwargs = {}

    def __init__(self):
        self.default_quick_listdir = True        

    def __getstate__(self):
        """
        Return a representation of the storage.  
        TODO: does anything need to be implemented here?
        """
        return {
            
        }

    def _get_object(self, name):
        """
        Helper function to retrieve the requested Object.
        """
        logger.info("in GoogleCloudStorage:_get_object()")
        if name not in self.container.get_object_names():
            return False
        else:
            return self.container.get_object(name)

    def _open(self, name, mode="rb"):
         logger.info("in GoogleCloudStorage:_open()")
         return GoogleCloudStorageFile(storage=self)

    def _save(self, name, content):
        logger.info("in GoogleCloudStorage:_save(), name: %s" % name)

        write_retry_params = cloudstorage.RetryParams(backoff_factor=1.1)
        # Checks if the content_type is already set.
        # Otherwise uses the mimetypes library to guess.
        if hasattr(content.file, "content_type"):
            file_content_type = content.file.content_type
        else:
            mime_type = mimetypes.guess_type(name)
            file_content_type = mime_type
            
        cloudstorage_file = cloudstorage.open(name, 
                        'w',
                        content_type=file_content_type,
                        options={'x-goog-meta-foo': 'foo',
                                 'x-goog-meta-bar': 'bar'},
                        retry_params=write_retry_params)
        logger.info("in GoogleCloudStorage:_save(), opened file")
        cloudstorage_file.write(content.read())
        logger.info("in GoogleCloudStorage:_save(), wrote to file")
        cloudstorage_file.close()
        file_stat = cloudstorage.stat(name)
        logger.info("in GoogleCloudStorage:_save(), got stat: %s" % repr(file_stat))
        return name

    def delete(self, name):
        """
        Deletes the specified file from the storage system.

        Deleting a model doesn't delete associated files: bit.ly/12s6Oox
        
        TODO: need to implement and test this
        """
        delete_retry_params = cloudstorage.RetryParams(backoff_factor=1.1)
        cloudstorage.delete(name,retry_params=delete_retry_params)
        logger.info("in BlobStorage:delete()")

    def exists(self, name):
        """
        Returns True if a file referenced by the given name already
        exists in the storage system, or False if the name is
        available for a new file.
        
        """
        logger.info("in GoogleCloudStorage:exists()")
        try:
            exist_retry_params = cloudstorage.RetryParams(backoff_factor=1.1)
            file_stat = cloudstorage.stat(name,retry_params=exist_retry_params)
            return True
        except cloudstorage.errors.NotFoundError:
            return False
        return False

    def size(self, name):
        """
        Returns the total size, in bytes, of the file specified by name.
        """
        logger.info("in GoogleCloudStorage:size()")
        size_retry_params = cloudstorage.RetryParams(backoff_factor=1.1)
        file_stat = cloudstorage.stat(name,retry_params=size_retry_params)
        return file_stat.st_size

    def url(self, name):
        """
        Returns an absolute URL where the content of each file can be
        accessed directly by a web browser.
        
        NOTE: done?  Seems to be getting URL using blobstore and images API (trick to get file served directly from GCS instead of through app)
        TODO: handle both image types and non-image types
        """
        logger.info("in GoogleCloudStorage:url()")
        # Blobstore API requires extra /gs to distinguish against blobstore files.
        blobstore_filename = '/gs' + name
        # This blob_key works with blobstore APIs that do not expect a
        # corresponding BlobInfo in datastore.
        blob_key = blobstore.create_gs_key(blobstore_filename)     
        logger.info("in GoogleCloudStorage:url(), blob_key: %s" % blob_key)
        blob_url = images.get_serving_url(blob_key)    
        logger.info("in GoogleCloudStorage:url(), about to print blob_url")
        logger.info("in GoogleCloudStorage:url(), blob_url: %s" % blob_url)
        return blob_url

    def listdir(self, path):
        """
        Lists the contents of the specified path, returning a 2-tuple;
        the first being an empty list of directories (not available
        for quick-listing), the second being a list of filenames.

        If the list of directories is required, use the full_listdir method.
        
        TODO: does anything need to be implemented here? 
        """
        logger.info("in GoogleCloudStorage:listdir()")
        files = []
        return ([], files)
    

class GoogleCloudStorageFile(File):
    """
    TODO: do any of these methods need to be changed? 
    """
    closed = False

    def __init__(self, storage, name, *args, **kwargs):
        logger.info("in GoogleCloudStorageFile:__init__()")
        self._storage = storage
        self._pos = 0
        super(GoogleCloudStorageFile, self).__init__(file=None, name=name,
                                                     *args, **kwargs)

    def _get_pos(self):
        logger.info("in GoogleCloudStorageFile:_get_pos()")
        return self._pos

    def _get_size(self):
        logger.info("in GoogleCloudStorageFile:_get_size()")
        if not hasattr(self, "_size"):
            self._size = self._storage.size(self.name)
        return self._size

    def _set_size(self, size):
        logger.info("in GoogleCloudStorageFile:_set_size()")
        self._size = size

    size = property(_get_size, _set_size)

    def _get_file(self):
        logger.info("in GoogleCloudStorageFile:_get_file()")
        if not hasattr(self, "_file"):
            self._file = self._storage._get_object(self.name)
            self._file.tell = self._get_pos
        return self._file

    def _set_file(self, value):
        logger.info("in GoogleCloudStorageFile:_set_file()")
        if value is None:
            if hasattr(self, "_file"):
                del self._file
        else:
            self._file = value

    file = property(_get_file, _set_file)

    def read(self, chunk_size=-1):
        """
        Reads specified chunk_size or the whole file if chunk_size is None.

        If reading the whole file and the content-encoding is gzip, also 
        gunzip the read content.
        """
        logger.info("in GoogleCloudStorageFile:read()")
        if self._pos == self._get_size() or chunk_size == 0:
            return ""

        if chunk_size < 0:
            meta, data = self.file.get(include_meta=True)
        else:
            data = self.file.get(chunk_size=chunk_size).next()
        self._pos += len(data)
        return data

    def chunks(self, chunk_size=None):
        """
        Returns an iterator of file where each chunk has chunk_size.
        """
        logger.info("in GoogleCloudStorageFile:chunks()")
        if not chunk_size:
            chunk_size = self.DEFAULT_CHUNK_SIZE
        return self.file.get(chunk_size=chunk_size)

    def open(self, *args, **kwargs):
        """
        Opens the cloud file object.
        """
        logger.info("in GoogleCloudStorageFile:open()")
        self._pos = 0

    def close(self, *args, **kwargs):
        logger.info("in GoogleCloudStorageFile:close()")
        self._pos = 0

    @property
    def closed(self):
        logger.info("in GoogleCloudStorageFile:closed()")
        return not hasattr(self, "_file")

    def seek(self, pos):
        logger.info("in GoogleCloudStorageFile:seek()")
        self._pos = pos


