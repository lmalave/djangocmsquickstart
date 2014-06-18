

 
CQ_Analytics.SegmentMgr.register("/etc/segmentation/geometrixx/male","( ( CQ_Analytics.OperatorActions.operate(clientcontext.profile, \'gender\', \'equals\', \'male\', \'\') ) )",0);
  
CQ_Analytics.SegmentMgr.register("/etc/segmentation/geometrixx/female","( ( CQ_Analytics.OperatorActions.operate(clientcontext.profile, \'gender\', \'equals\', \'female\', \'\') ) )",0);
  
CQ_Analytics.SegmentMgr.register("/etc/segmentation/geometrixx/samples","( ( CQ_Analytics.OperatorActions.operate(clientcontext.profile, \'age\', \'lessorequal\', \'25\', \'parseInt\') )  &&  ( ( ( CQ_Analytics.OperatorActions.operate(clientcontext.surferinfo, \'keywords\', \'contains\', \'music\', \'\') )  ||  ( CQ_Analytics.OperatorActions.operate(clientcontext.surferinfo, \'keywords\', \'contains\', \'mp3\', \'\') )  ||  ( CQ_Analytics.OperatorActions.operate(clientcontext.surferinfo, \'keywords\', \'contains\', \'itunes\', \'\') ) ) ) )",100);
  
CQ_Analytics.SegmentMgr.register("/etc/segmentation/geometrixx/child","( ( CQ_Analytics.OperatorActions.operate(clientcontext.profile, \'age\', \'younger\', \'13\', \'parseInt\') ) )",0);
  
CQ_Analytics.SegmentMgr.register("/etc/segmentation/geometrixx/teen","( ( CQ_Analytics.OperatorActions.operate(clientcontext.profile, \'age\', \'olderorequal\', \'13\', \'parseInt\') )  &&  ( CQ_Analytics.OperatorActions.operate(clientcontext.profile, \'age\', \'youngerorequal\', \'19\', \'parseInt\') ) )",0);
  
CQ_Analytics.SegmentMgr.register("/etc/segmentation/geometrixx/adult","( ( CQ_Analytics.OperatorActions.operate(clientcontext.profile, \'age\', \'older\', \'19\', \'parseInt\') ) )",0);
  
CQ_Analytics.SegmentMgr.register("/etc/segmentation/geometrixx/left","( ( clientcontext.mouseposition.x < 400 ) )",0);
  
CQ_Analytics.SegmentMgr.register("/etc/segmentation/geometrixx/right","( ( clientcontext.mouseposition.x >= 400 ) )",0);
 