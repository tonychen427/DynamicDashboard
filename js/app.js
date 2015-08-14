$(document).ready(function() {
    var xColumnsClass = ['','col-md-12','col-md-6','col-md-4','col-md-3','col-md-2'];

    var Slider = function () {
        this.initialize.apply(this, arguments);
    };
    Slider.prototype = {
        initialize: function (slider) {
            this.ul = slider.children[0];
            this.li = this.ul.children;
            this.ul.style.width = (this.li[0].clientWidth * this.li.length) + 'px';
            this.currentIndex = 0;
        },
        goTo: function (index) {
            if (index < 0 || index > this.li.length - 1)
                return;
            this.ul.style.left = '-' + (100 * index) + '%';
            this.currentIndex = index;
        },
        goToPrev: function () {
            this.goTo(this.currentIndex - 1);
        },
        goToNext: function () {
            this.goTo(this.currentIndex + 1);
        }
    };

    ko.bindingHandlers.slidersPanel = {
        init : function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            var sliders = [];
            $(element).each(function() {
                sliders.push(new Slider(this));
            });
        }
    }

    ko.bindingHandlers.customWidgets = {
        init: function(element, valueAccessor, allBindings, viewModel, bindingContext) { 

             var widgetData = ko.toJS(valueAccessor().widgetData);
             var widgetType = valueAccessor().widgetType;
                
             $(element).highcharts(widgetData);

        },
        update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {

        }
    };

    var viewModelWidget = function(mData){        
        var self = this;
        self.widgetId = ko.observable(mData.id);
        self.widgetName = ko.observable(mData.widgetName);
        self.widgetType = ko.observable(mData.widgetType);
        self.widgetData = ko.observable(mData.widgetData);     
    }

    var viewModelColumn = function(mData,mColumnSize){        
        var self = this;
        var data = [];                                
        $.each(mData.widgetList, function(i,v){ data.push(new viewModelWidget(v)); });
        self,id = mData.id;
        self.title = ko.observable(mData.title);
        self.css = ko.observable(xColumnsClass[mColumnSize]);                
        self.widgetList = ko.observableArray(data);
        self.edit_widget = function(data, event){
            console.log("Edit Widget");
            console.log(data);
            console.log(event);

        }
        self.remove_widget = function(data, event){
            console.log("Remove Widget");                    
            console.log(self.widgetList());
            self.widgetList.remove(data);
        }
    }

    var viewModelPanel = function(mData){        
        var self = this;
        var data = [];
        self.layouts = [{'title': 'One Column',   'columns' : [ {'text': '100%' , 'css': 'col-md-12 spaceFix' } ] },
                        {'title': 'Two Column',   'columns' : [ {'text': '50%' , 'css': 'col-md-6 spaceFix' },{'text': '50%' , 'css': 'col-md-6 spaceFix' }]},
                        {'title': 'Three Column', 'columns' : [ {'text': '33%' , 'css': 'col-md-4 spaceFix' },{'text': '33%' , 'css': 'col-md-4 spaceFix' },{'text': '33%' , 'css': 'col-md-4 spaceFix' }]},
                        {'title': 'Four Column',  'columns' : [ {'text': '25%' , 'css': 'col-md-3 spaceFix' },{'text': '25%' , 'css': 'col-md-3 spaceFix' },{'text': '25%' , 'css': 'col-md-3 spaceFix' },{'text': '25%' , 'css': 'col-md-3 spaceFix' }]}
                       ];
        $.each(mData.columnsList, function(i,v){ data.push(new viewModelColumn(v, mData.columnsList.length)); });
        self.panelId = ko.observable(mData.id);
        self.panelName = ko.observable(mData.title);
        self.css = ko.observable(mData.css);
        self.tabsIconic = ko.observable(mData.tabsIconic);
        self.columnsList = ko.observableArray(data);
        self.panelActions = function(data,event){            
            $("." + $(event.target).data("type") + data.panelId()).slideToggle( "slow", function() { });
        }
        
        self.updateLayout = function(data,event){
            $('.layoutBox').css('border','1px solid #c0c0c0');
            $(event.target).closest('.layoutBox').css('border','1px solid orange');
            
            var currentNumColumn = self.columnsList().length;
            var requestNumColumn = data.columns.length;
            var widgetList = [];

            if(currentNumColumn < requestNumColumn){    
                for (var i = 0; i < requestNumColumn ; i++) {
                    if (i < currentNumColumn){
                        self.columnsList()[i].css(xColumnsClass[requestNumColumn]);                            
                    }else{
                        var columnsData = { 'id': '_column' + i, 'title' : 'Column ' + i,'widgetList': [] } ;
                        self.columnsList.push(new viewModelColumn(columnsData,requestNumColumn));                     
                    }
                }
            }else{
                for (var i = currentNumColumn - 1 ; i >= 0  ; i--) {                    
                    if (i < requestNumColumn){
                        self.columnsList()[i].css(xColumnsClass[requestNumColumn]);   
                    } else{
                        for( var w = 0; w < self.columnsList()[i].widgetList().length ; w++){                            
                            self.columnsList()[requestNumColumn-1].widgetList.push(self.columnsList()[i].widgetList()[w]);    
                        }                        
                        self.columnsList.splice(i, 1);
                    }                      
                }                
            }
        }        
    }

    var viewModelDashboard = function(mData){
        var self = this;                
        var data = [];
        $.each(mData, function(i,v){ data.push(new viewModelPanel(v)); });
        var dummyReport =[
                {
                    'id': '_reportId01', 'reportName' : 'Company Summary' , 'css':'active', 'reportsList' : [ 
                                                                            new viewModelWidget({'id': '_widget5', 'widgetName' : 'Report 1', 'widgetType':'highcharts' ,'widgetData': tempChart }),
                                                                            new viewModelWidget({'id': '_widget6', 'widgetName' : 'Report 2', 'widgetType':'highcharts' ,'widgetData': tempChart2 }),
                                                                            new viewModelWidget({'id': '_widget7', 'widgetName' : 'Report 3', 'widgetType':'highcharts' ,'widgetData': tempChart }),
                                                                            new viewModelWidget({'id': '_widget8', 'widgetName' : 'Report 4', 'widgetType':'highcharts' ,'widgetData': tempChart2 }),
                                                                      ] 
                },
                {
                    'id': '_reportId02', 'reportName' : 'Extension Summary' ,'css':'', 'reportsList' : [ 
                                                                            new viewModelWidget({'id': '_widget9', 'widgetName' : 'Report 5', 'widgetType':'highcharts' ,'widgetData': tempChart }),
                                                                            new viewModelWidget({'id': '_widget10', 'widgetName' : 'Report 6', 'widgetType':'highcharts' ,'widgetData': tempChart2 }),
                                                                            new viewModelWidget({'id': '_widget11', 'widgetName' : 'Report 7', 'widgetType':'highcharts' ,'widgetData': tempChart }),
                                                                            new viewModelWidget({'id': '_widget12', 'widgetName' : 'Report 8', 'widgetType':'highcharts' ,'widgetData': tempChart2 }),
                                                                      ] 
                }
        ];
        self.availableReportsList = ko.observableArray(dummyReport);        
        self.dashboardList = ko.observableArray(data);
        self.add_panel = function(){                    
            var numDashboard = self.dashboardList().length + 1;
            var dummyData = {
                                'id' : "_dashboard" + numDashboard, 
                                'title' : "Dashboard " + numDashboard,
                                'tabsIconic' : 'fa fa-bar-chart',
                                'css' : numDashboard == 1 ? "active" : "", 
                                "columnsList" : 
                                                [
                                                    {
                                                        'id': '_column3',
                                                        'title' : 'Column 3',
                                                        'widgetList':
                                                                    [ 
                                                                        {'id': '_widget3', 'title' : 'Widget 3', 'widgetType':'highcharts' ,'widgetData': tempChart2 }
                                                                    ]
                                                    }
                                                ]
                            };                    
            self.dashboardList.push(new viewModelPanel(dummyData));   
        };
        self.remove_panel = function(data){                    
            self.dashboardList.remove(data);
        };
        self.updateLastAction = function(arg) {
            //console.log(arg);
            //console.log("Moved " + arg.item.name() + " from " + arg.sourceParent.id + " (seat " + (arg.sourceIndex + 1) + ") to " + arg.targetParent.id + " (seat " + (arg.targetIndex + 1) + ")");
            var x = ko.toJS(self.dashboardList());
            console.log(x);
        };
        self.verifyAssignments = function(arg) {
            console.log(arg);
             var found, newWidget = arg.item;
                        
             if (arg.sourceParent !== arg.targetParent) {
                 found = ko.utils.arrayFirst(arg.targetParent(), function(widget) {
                     return widget.widgetId === newWidget.widgetId;              
                 });
                
                if (found) {
                    self.lastError("This newWidget already belongs to this table");
                    
                } else {                    
                    //arg.targetParent.splice(arg.targetIndex, null, newWidget.clone());
                }
                arg.cancelDrop = true;
            }
        };
    }

    var dashboard = new viewModelDashboard(dashboardData);  
    //ko.bindingHandlers.sortable.beforeMove = dashboard.verifyAssignments;    
    ko.bindingHandlers.sortable.afterMove = dashboard.updateLastAction;               
    ko.applyBindings(dashboard);
});