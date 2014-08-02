(function (global) {
    var loanViewModal,
        app = global.app = global.app || {};

    loanViewModal = kendo.data.ObservableObject.extend({
        legal_business_name:'',
        dba_name:'',
        street_no:'',
        street_name:'',
        apt_suite_unit:'',
        select_state:'',
        select_city:'',
        zip_code:'',
        mobile_number:'',
        select_b_l_s:'',
        industry:'',
        sub_industry:'',
        select_buss_s_m:'',
        select_buss_s_y:'',
        yettostart:'',
        average_annual_revenue:'',
        buss_operating_expenses:'', 
        acceptcard_yes:1,
        acceptcard_no:0,
        datefirstProcessed_month:'',
        datefirstProcessed_day:'',
        datefirstProcessed_year:'',
        c_c_card_processor:'',
        merchant_id:'',
        MonthlyVolumeAmountsList1:'',
        MonthlyVolumeTicketsList1:'',
        MonthlyVolumeAmountsList2:'',
        MonthlyVolumeTicketsList2:'',
        MonthlyVolumeAmountsList3:'',
        MonthlyVolumeTicketsList3:'',
        MonthlyVolumeAmountsList4:'',
        MonthlyVolumeTicketsList4:'',
        debttype_yes:1,
        debttype_no:0,
        selectdebttype:'',
        selDisbursed:'',
        busproInfo_owned:1,
        busproInfo_leased:0,
        outstandingMort_yes:1,
        outstandingMort_no:0,
        mortgage_bank:'',
        outs_bal:'',
        month_mort_amount:'',
        monthly_rent:'',
        landlord_name:'',
        contact_number:'',
        real_state:'',
        inventory:'',
        equip_finance:'',
        account_rece:'',
        currntControl:0,
        totbusinessDebtYesDiv:'',
        deleteIds:[],
        afterShow:function()
        {
            if($('.crditaccep').val()==='1') {
                
            	app.loansetting.viewModel.creditCardValidate();
            }
        },
        show:function() {
            $('.srh_men  .scmsk').mouseover(function() {
                $("#log_BX").hide();
                $("#socl_BX").hide();
                $("#srch_BX").slideToggle(300);
                $('.log_men').removeClass("act");
                $('.soc_men').removeClass("act");
                $('.srh_men').toggleClass("act");
                $('.soc_men .scmsk').show();
                $('.srh_men .scmsk').hide();
                $('.log_men .scmsk').show();
            });  
            $('#srch_BX .clsmnub').click(function() {
                $("#srch_BX").slideToggle(300);
                $('.log_men').removeClass("act");
                $('.srh_men').removeClass("act");
                $('.soc_men').removeClass("act");
                $('.soc_men .scmsk').show();
                $('.srh_men .scmsk').show();
                $('.log_men .scmsk').show();
            }); 

            //$(".reld_info").tooltip({ effect: 'slide', position: 'bottom center'});
            // $(".que_hint").tooltip({ effect: 'slide', position: 'bottom center'});
            $(".que_hint").kendoTooltip({
                autoHide: false,
                width: 240,
                showOn: "click",
                callout: false,
                content: function(e) {
                	return e.target.context.nextElementSibling.innerHTML;
                },
            });
            // menu 
            $('.subms').hide();
            $('.subnv ').click(function() {
            	$(".subms").slideToggle(300);
            	$('.subnv').toggleClass("act");
            });

            // application
            $('.montrnt.yes').hide();
            $('.crYes ').click(function() {
            	$('.montrnt').hide();
            	$('.montrnt.yes').show();
            });
            $('.crNo ').click(function() {
            	$('.montrnt').show();
            	$('.montrnt.yes').hide();
            });

            // tipsy
            /* $(function() {
            $('.inpbf').tipsy({gravity: 'se'});
            $('.IN1b').tipsy({gravity: 'se'});
            $('.IN3').tipsy({gravity: 'se'});
            $('.IN3b').tipsy({gravity: 'se'});
            $('.inpbf_sl').tipsy({gravity: 'se'});
            $('.IN1').tipsy({gravity: 'se'});
            $('.IN5').tipsy({gravity: 'se'});
            $('.IN6').tipsy({gravity: 'se'});
            $('.IN4').tipsy({gravity: 'se'});

            });*/

            $('.own2').hide();
            $('.admr').click(function() {	
            	$('.own2').show(); 
            	$('.addbtns').hide();
            });

            /*--------------function for select--------------*/

            $('#count_number').change(function() {
                var sel_value = $(this).val();

                if (sel_value < '5') {
                	$('#dis_count').show();
                } else {
                	$('#dis_count').hide();
                }
            });

            /*--------------function for radio--------------*/
            $('.se_radio').click(function() {
                var sel_value = $(this).val();
                if (sel_value==='1') {
                	$('#credit_show').show();
                } else {
                	$('#credit_show').hide();
                }
            });
            
            // credit card accpted
            
            $('.crditaccep').click(function() {
                var sel_value = $(this).val();
                if (sel_value === '1') {
                	$('#credit_show').show();
                } else {
                	$('#credit_show').hide();
                }
            });
            
            
			$(".busimort").click(function() {
            	var mort_value=$(this).val();	
            	if(mort_value==='1'){
            		$("#outstandingMortagageDiv").show();		
            	} else {
            		$("#outstandingMortagageDiv").hide();	
            	}
            							  
             });
            // outtand dept

            $('.outDebt').click(function() {
            	var sel_value=$(this).val();
                if(sel_value==='1'){
                    if($('#currntControl').val()==='0' || $('#currntControl').val()==='') {
                    	$("#add-form").trigger('click');
                    }
                    $('#outsta_debt').show();
                }
                else{
                    if($('#currntControl').val()>0) {
                    	alert('Please delete all existing debts information');
                    	$('input:radio[name=debttype]:nth(0)').prop('checked',true);
                        $('#outsta_debt').show();
                    } else {
                    	$('#outsta_debt').hide();
                    }
                }    
          
            })

            // outtand dept

            $('.businf').click(function() {
                var sel_value = $(this).val();
                if (sel_value==='1') {
                	$('#busInfobx').show();
                	$('#busInfobx2').hide();
                } else {
                	$('#busInfobx2').show();
                	$('#busInfobx').hide();
                }
            });
            

            // credi card proc
            $('#creditcardproc').change(function() {
                var sel_value = $(this).val();
                if (sel_value==='') {
                	$('.mercPr').hide();
                } else {
                	$('.mercPr').show();
                }
            })

            // credit score yes/no

            $('.crYes').click(function() {
                var sel_value = $(this).val();
                if (sel_value==='1') {
                	$('#crdscrYes').hide();
                	$('#crdscrNo').show();
                } else {
                	$('#crdscrYes').show();
                	$('#crdscrNo').hide();
                }
            });
            $('.tpar').click(function() {
            	alert('debug');
            });

            $("#yettostart").click(function() {
                if($(this).is(':checked')) {
                    $('#dbs_month').val("");
                    $('#dbs_year').val("");

                    $('#revenue').val("");
                    $('#operatingexp').val("");

                    $('#dbs_month').attr("disabled","disabled");
                    $('#dbs_year').attr("disabled","disabled");

                    $('#revenue').attr("disabled","disabled");
                    $('#operatingexp').attr("disabled","disabled");

                } else {
                    $('#dbs_month').removeAttr("disabled");
                    $('#dbs_year').removeAttr("disabled");

                    $('#revenue').removeAttr("disabled","disabled");
                    $('#operatingexp').removeAttr("disabled","disabled");

                }

            });
            $.validator.addMethod("alphanumeric", function(value, element) {
            	return this.optional(element) || /^\w+$/i.test(value);
            });
            $.validator.addMethod("loginRegex", function(value, element) {
            	return this.optional(element) || /^[a-z0-9\-\s]+$/i.test(value);
            });

            $.validator.addMethod("zipcodeUS", function(value, element) {
            	return this.optional(element) || /\d{5}-\d{4}$|^\d{5}$/.test(value);
            });	
            $.validator.addMethod("phoneUS", function(phone_number, element) {
                phone_number = phone_number.replace(/\s+/g, "");
                return this.optional(element) || phone_number.length > 9 &&
                phone_number.match(/^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
            });

            $.validator.addMethod("ownerPercent", function(value, element) {

            	var total_per = (parseInt($("#own_percent").val())+parseInt(value));
            	if(total_per > 100) { return false;	} else { return true; }
            });
            $.validator.addMethod("dbscurrent", function(value, element) {
                var d = new Date();
                var n = d.getMonth(); 
                var o = d.getFullYear(); 
                var c= parseInt($("#dbs_year").val());
                n=n+1;
                if(value>n && o===c)  {
                	return false; 
                } else {
                	return true; 
                }
            });
            // outtand dept
            viewFModel = kendo.observable();
            var addForm = $("#add-form");
            var index = 0;
            divId = [];
            addForm.on("click", function() {
            
                app.loansetting.viewModel.addOutDebtVar(++index);
                var form = app.loansetting.viewModel.getForm(index);
                //$('#totbusinessDebtYesDiv').val(index);
                
                app.loansetting.viewModel.setHiddenField(index);

                var tot = parseInt($('#currntControl').val()) + 1;
                $('#currntControl').val(tot);
                $("#debtwrapper").append(form);
                $("#debttype"+index).rules("add", {
                	required: true,
                	messages: {
                		required: "This value is required"
                	}
                });
                $("#yeardisbursed"+index).rules("add", {
                	required: true,
                	messages: {
                		required: "This value is required"
                	}
                });
                totalOutstanding = 0;
                
                $("#remove-form" + index).on("click", function() {
                    var currentIndex = $(this).data("index");
                    $("#debt" + currentIndex).remove();
                    $("#loan_" + currentIndex).remove();
                    $('#currntControl').val($('#currntControl').val() - 1);
                    divId.push(currentIndex);
                    app.loansetting.viewModel.setHiddenFieldDeleteIds(divId);
                    //$('#deleteIds').val(divId);
                    if ($('#currntControl').val().trim() === '0' || $('#currntControl').val().trim() === 0) {
                        $(".outDebt").prop("checked", false); 
                        $('#outsta_debt').hide();
                    }
                    app.loansetting.viewModel.deleteOutDebtVar(currentIndex);
                });
            });

            
            
          $("#B2cAppForms").validate({
        		
        	rules: {
        			orgname: {
        				required: true
        			},
        			civic: { 
        				required: true,
        				number : true
        			},
        			baddr: {
        				required: true
        			},
    				state: {
    					required: true
    				},
        			cmbCity: {
        				required: true
        			},
        			zipcode: {
        				required: true,
        				zipcodeUS: true
        				
        			},
        			businessphone: {
        				required: true,
        				phoneUS: true
        			},
        			blegal: {
        				required: true
        				},
        			orgtype: {
        				required: true
        			},
        			orgcategory: {
        				required: true
        			},
        			dbs_year: {
        				required: true
        			},
        			dbs_month: {
        				required: true,
        				dbscurrent: true
        			},
        			revenue: {
        				required: true,
        				number: true
        			},
        			operatingexp: {
        				required: true,
        				number: true
        			},
        			acceptcard: {
        				required: true,
        				},
        			debttype: {
        				required: true
        				
        			},
        			busi_pro_info_type: {
        				required: true
        			},
                
                    busproInfo:{
                    	required:true,
                    }
        			
        		},
        	messages: {
        			orgname: {
        				required: "This value is required"
        			 },
        			civic: { 
        				required: "This value is required",
        				number: "Please enter digits only"
        			},
        			baddr: {
        				required: "This value is required"
        			},
        			state: {
        				required: "This value is required"
        			},
        			cmbCity: {
        				required: "This value is required"
        			},
        			zipcode: {
        				required: "This value is required",
        				zipcodeUS: "Please enter valid zipcode"
        				
        			},
        			businessphone: {
        				required: "This value is required",
        				phoneUS: "Please enter us phone number"
        			},
        			blegal: {
        				required: "This value is required"
        			},
        			orgtype: {
        				required: "This value is required"
        			},
        			orgcategory: {
        				required: "This value is required"
        			},
        			dbs_year: {
        				required: "This value is required"
        			},
        			dbs_month: {
        				required: "This value is required",
        				dbscurrent: "Please select valid value"
        			},
        			revenue: {
        				required: "This value is required",
        				number: "Please enter digits only"
        			},
        			operatingexp: {
        				required: "This value is required",
        				number: "Please enter digits only"
        			},
        			acceptcard: {
        				required: "This value is required",
        			},
        			debttype: {
        				required: "This value is required"
        			},
        			busi_pro_info_type: {
        				required: "This value is required"
        			},
                	busproInfo:{
                    	required:"This value is required",
                    }
        		},
         	submitHandler: function(form) {
        		 	// $("#b2cApp1 #next").prop("disabled", true);
        				 return false;
        	}
        	 
        });


        },
        getForm:function(index, action) {
            
            return $('<div class="rw_lin addons clearfix" id="debt' + index + '"><p class="imp40">' + app.loansetting.viewModel.createDebtType(index) + '</p><p class="imp40">' + app.loansetting.viewModel.createYear(index) + '</p><p><a class="rem_col" href="javascript:void(0);" id="remove-form' + index + '" data-index="' + index + '">Remove</a></p></div><div id="loan_' + index + '"></div>');
        },
        createDebtType:function(NumOfDiv) {
            var str = '';
            str = "<select name='debttype" + NumOfDiv + "' class='IN5 debtclass' title='Select Debt Type' id='debttype" + NumOfDiv + "' onChange='javascript:app.loansetting.viewModel.createInput(" + NumOfDiv + ", " + NumOfDiv + ")' data-bind='value: debttype"+NumOfDiv+"' title='Select Debt Type'><option value=''>Select Debt Type</option><option value='Business Credit Card'>Business Credit Card</option><option value='Cash Advance'>Cash Advance</option><option value='Line of credit'>Line of credit</option><option value='Term loan'>Term loan</option></select>";
            return str;
        },
        createYear:function(yearid) {
            var str;
            str = "<select name='yeardisbursed" + yearid + "' id='yeardisbursed" + yearid + "' data-bind='value: yeardisbursed"+yearid+"' title='Select Disbursed Year' class='IN5'>";
            str +='<option value="">Select Disbursed Year</option>';
            for (i=1970; i <= 2020;i++) {
            	str +='<option value=' + i + '>' + i + '</option>';
            }
            str +='</select>';
            return str;
        },
        createInput:function(value,NumOfDiv) {
            
            value = $("#debttype"+NumOfDiv).val().trim();
            viewFModel['debttype'+NumOfDiv] = value;
            var str='';
            if(value==='Term loan') {
                    str +='<div class="rw_lin  addons_det clearfix lineofcred">\
                    <p class="imp40 clearfix">\
                    '+app.loansetting.viewModel.createCollateral(NumOfDiv)+'\
                    </p>\
                    <div class="clear"></div>\
                    <p class="imp40">\
                    <input type="text" class="IN5 mb15 number" placeholder="Original Loan Amount ($)" name="txtAmountTerm'+NumOfDiv+'" id="txtAmountTerm'+NumOfDiv+'" data-bind="value: txtAmountTerm'+NumOfDiv+'" original-title="Original Loan Amount $">\
                    </p>\
                    <p class="imp40">\
                    <input type="text" class="IN5 number" placeholder="Outstanding Loan Amount ($)" name="txtOutAmountTerm'+NumOfDiv+'" id="txtOutAmountTerm'+NumOfDiv+'" data-bind="value: txtOutAmountTerm'+NumOfDiv+'" original-title="Outstanding Loan Amount $">\
                    </p>\
                    <div class="clear"></div>\
                    <p class="imp40">\
                    <input type="text" name="txtInterestTerm'+NumOfDiv+'" id="txtInterestTerm'+NumOfDiv+'" data-bind="value: txtInterestTerm'+NumOfDiv+'" maxlength="5" placeholder="Interest Rate (%)" class="IN5 mb15" original-title="Interest Rate (%)">\
                    </p>\
                    <p class="imp40">\
                    <select name="txtYearTerm'+NumOfDiv+'" id="txtYearTerm'+NumOfDiv+'" data-bind="value: txtYearTerm'+NumOfDiv+'" class="IN5B" title="Interest Rate Year(s)">\
                    <option value="1" selected="">Year(s)</option>\
                    <option value="2">Half-year</option>\
                    <option value="4">Quarter</option>\
                    <option value="12">Month</option>\
                    <option value="52">Week</option>\
                    <option value="365">Day</option>\
                    </select>\
                    </p>\
                    <div class="clear"></div>\
                    <p class="imp40">\
                    <select class="IN4" name="txtPaymentModeTerm'+NumOfDiv+'" id="txtPaymentModeTerm'+NumOfDiv+'" data-bind="value: txtPaymentModeTerm'+NumOfDiv+'" original-title="Select Payment Schedule">\
                    <option value="">Payment Schedule</option>\
                    <option value="1">Annually</option>\
                    <option value="2">semi-annually</option>\
                    <option value="4">quarterly</option>\
                    <option value="12">monthly</option>\
                    <option value="52">weekly</option>\
                    <option value="365">daily</option>\
                    </select>\
                    </p>\
                    <p class="imp40">\
                    <input type="text" class="IN4" name="txtTerm'+NumOfDiv+'" id="txtTerm'+NumOfDiv+'" data-bind="value: txtTerm'+NumOfDiv+'" placeholder="Term" original-title="Term">\
                    </p>\
                    <p class="imp40">\
                    <select name="txtFrequncyTerm'+NumOfDiv+'" id="txtFrequncyTerm'+NumOfDiv+'" data-bind="value: txtFrequncyTerm'+NumOfDiv+'" class="IN4" original-title="Term Year(s)">\
                    <option value="1" selected="">Year(s)</option>\
                    <option value="2">Half-year(s)</option>\
                    <option value="4">Quarter(s)</option>\
                    <option value="12">Month(s)</option>\
                    <option value="52">Week(s)</option>\
                    <option value="365">Day(s)</option>\
                    </select>\
                    </p>\
                    </div>';
 
                
            } else if(value==='Cash Advance') {
                    str +='<div class="rw_lin  addons_det clearfix cash_advns">\
                    <p class="imp40">\
                    <input type="text" class="IN5" placeholder="Funding Company" name="tpcompany'+NumOfDiv+'" id="tpcompany'+NumOfDiv+'" data-bind="value:tpcompany'+NumOfDiv+'" original-title="Funding Company">\
                    </p>\
                    <p class="imp40">\
                    <input type="text" class="IN5 number" placeholder="Funded Amount ($)" name="ocadvance'+NumOfDiv+'" id="ocadvance'+NumOfDiv+'" data-bind="value:ocadvance'+NumOfDiv+'" original-title="Funded Amount ($)">\
                    </p>\
                    ';
                    str +='<p class="imp40 select_caterm"><select class="IN5 debtclass valid" title="Select Term (Months)" name="funded_term'+NumOfDiv+'" id="funded_term'+NumOfDiv+'" data-bind="value:funded_term'+NumOfDiv+'">';
                    str +='<option value="">Select Term (Months)</option>';
                    for(var term=1; term< 301; term++){
                        var noyears = '';
                        if(term%12 === 0 ) {
                            if(term === 12){
                            	noyears = ': 1Year'; 
                            } else {
                            	var cyears = term/12;
                            	noyears = ': '+cyears+'Years';                     
                            }                  
                    	}
                        if(noyears !==''){
                            //noyears = noyears.bold();
                            	var bstyle = 'style="font-weight:bold;" ';
                            	str +='<option value="'+term+'" '+bstyle+'>'+term+' '+noyears+'</option>';
                        } else {
                            str +='<option value="'+term+'">'+term+'</option>';
                        }
                    }
                    str +='</select></p>';
                    str +='</div>';
			} else if(value==='Business Credit Card') {
                    str +='<div class="rw_lin addons_det clearfix debt_crecrd">\
                    <p class="imp40">\
                    <input type="text" placeholder="Outstanding Loan Amount ($)" name="txtOutCredit'+NumOfDiv+'" id="txtOutCredit'+NumOfDiv+'" data-bind="value:txtOutCredit'+NumOfDiv+'" class="IN4 number" original-title="Outstanding Loan Amount ($)">\
                    </p>\
                    <p class="imp40">\
                    <input type="text" placeholder="Interest Rate (%)" name="txtInterestCredit'+NumOfDiv+'" id="txtInterestCredit'+NumOfDiv+'" data-bind="value:txtInterestCredit'+NumOfDiv+'" maxlength="5" class="IN4" original-title="Interest Rate (%)">\
                    </p>\
                    <p class="imp40">\
                    <select name="txtPerYearCredit'+NumOfDiv+'" id="txtPerYearCredit'+NumOfDiv+'" data-bind="value:txtPerYearCredit'+NumOfDiv+'" class="IN4" original-title="Interest Rate Year(s)">\
                    <option value="1" selected="">Year(s)</option>\
                    <option value="2">Half-year</option>\
                    <option value="4">Quarter</option>\
                    <option value="12">Month</option>\
                    <option value="52">Week</option>\
                    <option value="365">Day</option>\
                    </select>\
                    </p>\
                    </div>';
		
 		} else if(value==='Line of credit') {
                    str +='<div class="rw_lin  addons_det clearfix lineofcred">\
                    <p class="imp40 clearfix">\
                    '+app.loansetting.viewModel.createCollateral(NumOfDiv)+'\
                    </p>\
                    <div class="clear"></div>\
                    <p class="imp40">\
                    <input type="text" placeholder="Outstanding Loan Amount ($)" name="txtOutCredit'+NumOfDiv+'" id="txtOutCredit'+NumOfDiv+'" data-bind="value:txtOutCredit'+NumOfDiv+'" class="IN4 number" original-title="Outstanding Loan Amount ($)">\
                    </p>\
                    <p class="imp40">\
                    <input type="text" placeholder="Interest Rate (%)" name="txtInterestCredit'+NumOfDiv+'" id="txtInterestCredit'+NumOfDiv+'" data-bind="value:txtInterestCredit'+NumOfDiv+'" class="IN4" maxlength="5" original-title="Interest Rate (%)">\
                    </p>\
                    <p class="imp40">\
                    <select name="txtPerYearCredit'+NumOfDiv+'" id="txtPerYearCredit'+NumOfDiv+'" data-bind="value:txtPerYearCredit'+NumOfDiv+'" class="IN4" original-title="Interest Rate Year(s)">\
                    <option value="1" selected="">Year(s)</option>\
                    <option value="2">Half-year</option>\
                    <option value="4">Quarter</option>\
                    <option value="12">Month</option>\
                    <option value="52">Week</option>\
                    <option value="365">Day</option>\
                    </select>\
                    </p>\
                    </div>';
  		} else if(value==='') {
                    document.getElementById('loan_'+NumOfDiv).style.display='none';
                    str='';
          }
            document.getElementById('loan_'+NumOfDiv).innerHTML =str;
            app.loansetting.viewModel.addBindOutDebtVar(NumOfDiv);

            // Added by  Later
            if(value!=='') {
            	document.getElementById('loan_'+NumOfDiv).style.display='block';
            }
        
            if(value==="Term loan") {

                $("#collateraltype"+NumOfDiv).rules("add", {
                	required: true,
                	messages: {
                		required: "This value is required"
                		
                	}
                });
                $("#txtAmountTerm"+NumOfDiv).rules("add", {
                	required: true,
                	number: true,
                	messages: {
                		required: "This value is required",
                		number: "Please enter digit only"
                		
                	}
                });
                $("#txtOutAmountTerm"+NumOfDiv).rules("add", {
                	required: true,
                	number: true,
                	messages: {
                		required: "This value is required",
                		number: "Please enter digit only"
                		
                	}
                });

                $("#txtTerm"+NumOfDiv).rules("add", {
                	required: true,
                	number:true,
                	messages: {
                		required: "This value is required",
                		number: "Please enter digit only"
                		
                	}
                });
                $("#txtInterestTerm"+NumOfDiv).rules("add", {
                	required: true,
                	number:true,
                	messages: {
                		required: "This value is required",
                		number: "Please enter digit only"
                		
                	}
                });

                $("#txtPaymentModeTerm"+NumOfDiv).rules("add", {
                	required: true,
                	messages: {
                		required: "This value is required"
                		
                	}
                });
 		 
			}
		
			if(value==="Cash Advance") {
                $("#tpcompany"+NumOfDiv).rules("add", {
                required: true,
                messages: {
                required: "This value is required"
                }
                });
                $("#ocadvance"+NumOfDiv).rules("add", {
                required: true,
                number: true,
                messages: {
                required: "This value is required",
                number: "Please enter digit only"
                }
                }); 

                $("#funded_term"+NumOfDiv).rules("add", {
                required: true,
                messages: {
                required: "This value is required"
                }
                });

       	 }
			if(value==="Business Credit Card" || value==="Line of credit") {
				if(value!=='Business Credit Card') {
            		$("#collateraltype"+NumOfDiv).rules("add", {
            			required: true,
            			messages: {
            				required: "This value is required"
            			}
            		});
				}
        		$("#txtOutCredit"+NumOfDiv).rules("add", {
        			required: true,
        			number: true,
        			messages: {
        				required: "This value is required",
        				number: "Please enter digit only"
        				
        			}
        		});
        		$("#txtInterestCredit"+NumOfDiv).rules("add", {
        			required: true,
        			number: true,
        			messages: {
        				required: "This value is required",
        				number: "Please enter digit only"
        			}
        		});
			} 
            
            },
            createCollateral:function (NumOfDiv) {
                str='';
                str='<select name="collateraltype'+NumOfDiv+'" id="collateraltype'+NumOfDiv+'" data-bind="value: collateraltype'+NumOfDiv+'" class="IN5 mb15" original-title="Select Collateral"><option value="">Select Collateral</option><option value="Real Estate">Real Estate</option><option value="Equipment">Equipment</option><option value="Account Receivables">Account Receivables</option><option value="Inventory">Inventory</option><option value="Credit Cards Receivables">Credit Cards Receivables</option><option value="Business">Business</option><option value="None">None</option></select>';
                return str;
            },
        	creditCardValidate:function()
        	{
                $("#datefirstProcessed_month").rules("add", {
                    required: true,
                    messages: {
                    required: "This value is required"
                }
                });
                $("#datefirstProcessed_day").rules("add", {
                    required: true,
                    messages: {
                    required: "This value is required"
                }
                });
                $("#datefirstProcessed_year").rules("add", {
                    required: true,
                    messages: {
                    required: "This value is required"
                }
                });

                $("#creditcardproc").rules("add", {
                    required: true,
                    messages: {
                    required: "This value is required"
                }
                });
                $("#merchantid").rules("add", {
                    required: true,
                    number: true,
                    minlength:9,
                    messages: {
                        required: "This value is required",
                        number: "This value is required",
                        minlength: "Please enter only 9 digit merchantid"
                    }
                });

                $("#MonthlyVolumeAmountsList1").rules("add", {
                    required: true,
                    number: true,
                    messages: {
                    required: "This value is required",
                    number: "Please enter digits only"
                }
                });
                $("#MonthlyVolumeTicketsList1").rules("add", {
                    required: true,
                    number: true,
                    messages: {
                    	required: "This value is required",
                    	number: "Please enter digits only"
                	}
                });

                $("#MonthlyVolumeAmountsList2").rules("add", {
                    required: true,
                    number: true,
                    messages: {
                    	required: "This value is required",
                    	number: "Please enter digits only"
                    }
                });
                $("#MonthlyVolumeTicketsList2").rules("add", {
               	 required: true,
                	number: true,
                    messages: {
                   	 required: "This value is required",
                    	number: "Please enter digits only"
                    }
                });
                $("#MonthlyVolumeAmountsList3").rules("add", {
                    required: true,
                    number: true,
                    messages: {
                    	required: "This value is required",
                    	number: "Please enter digits only"
                    }
                });
                $("#MonthlyVolumeTicketsList3").rules("add", {
                    required: true,
                    number: true,
                    messages: {
                        required: "This value is required",
                        number: "Please enter digits only"
                    }
                });
                $("#MonthlyVolumeAmountsList4").rules("add", {
                    required: true,
                    number: true,
                    messages: {
                    	required: "This value is required",
                    	number: "Please enter digits only"
                    }
                });
                $("#MonthlyVolumeTicketsList4").rules("add", {
                    required: true,
                    number: true,
                    messages: {
                    	required: "This value is required",
                    	number: "Please enter digits only"
                    }
                });
                $("#busi_mort_bank").rules("add", {
                    required: true,
                    messages: {
                    	required: "This value is required"
              	  }
				});
                
                $("#busi_out_balance").rules("add", {
                    required: true,
                    number: true,
                    messages: {
                    	required: "This value is required",
                    	number: "Please enter digits only"
                     }
                });
                $("#busi_month_mort_amount").rules("add", {
                    required: true,
                    number: true,
                    messages: {
                        required: "This value is required",
                        number: "Please enter digits only"
                    }
                });
                $("#busi_month_rent").rules("add", {
                    required: true,
                    number: true,
                    messages: {
                    	required: "This value is required",
                    	number: "Please enter digits only"
                    }
				});
                $("#busi_cont_number").rules("add", {
                	phoneUS: true,
                	messages: {
                		phoneUS: "Please enter us phone number"
                	}
                });
                $("#busi_out_mort_type").rules("add", {
                	required: true,
                	messages: {
                		required: "This value is required"
                	}
                });
        	},
            loanAppCIpage:function() {
            	apps.navigate("views/loanAppCI.html");
            },
            loanAppPIpage:function() {
            	apps.navigate("views/loanAppPI.html");
            },
            loanAppFPpage:function() {
            	apps.navigate("views/loanAppFP.html");
            },
        setHiddenField:function(index)
        {
                var that =this;
                that.set("totbusinessDebtYesDiv",index);
        },
        setHiddenFieldDeleteIds:function(ids)
        {
            console.log(ids);
                var that =this;
                that.set("deleteIds",ids);
        },
        	
        	loanAppBISubmit:function(){
                //var status = $('#B2cAppForms').valid();
                //if(status === false)
               // {
                //    return status;
                //}
                //that.get("collateraltype1").trim();
                
                var that = this;
                dataParam =  {};
				legal_business_name 		= that.get("legal_business_name").trim();
                dataParam['legal_business_name']=legal_business_name;
                dbaName					 = that.get("dba_name").trim(),
                dataParam['dbaName']=dbaName;
                streetNo					= that.get("street_no").trim(),
                dataParam['streetNo']=streetNo;
                streetName				  = that.get("street_name").trim(),
                dataParam['streetName']=streetName;
                aptSuiteUnit				= that.get("apt_suite_unit").trim(),
                dataParam['aptSuiteUnit']=aptSuiteUnit;
                selectState				 = that.get("select_state").trim(),
                dataParam['selectState']=selectState;
                selectCity				  = that.get("select_city").trim(),
                dataParam['selectCity']=selectCity;
                zipCode	 				= that.get("zip_code").trim(),
                dataParam['zipCode']=zipCode;
                mobileNumber				= that.get("mobile_number").trim(),
                dataParam['mobileNumber']=mobileNumber;
                
                
                select_BLS				  = that.get("select_b_l_s").trim(),
                dataParam['select_BLS']=select_BLS;
                industry					= that.get("industry").trim(),
                dataParam['industry']=industry;
                subIndustry				 = that.get("sub_industry").trim(),
                dataParam['subIndustry']=subIndustry;
                select_BSM  				= that.get("select_buss_s_m").trim(),
                dataParam['select_BSM']=select_BSM;
                
                
                
                select_BSY  				= that.get("select_buss_s_y").trim(),
                dataParam['select_BSY']=select_BSY;
                yettostart  				= that.get("yettostart").trim(),
                dataParam['yettostart']=yettostart;
                avgAnnualRevenue   		 = that.get("average_annual_revenue").trim(),
                dataParam['avgAnnualRevenue']=avgAnnualRevenue;
                
                
                bussOperatExpen 			= that.get("buss_operating_expenses").trim(),
                dataParam['streetNo']=streetNo;
                acceptCardYES	  		 = that.get("acceptcard_yes"),
                dataParam['streetNo']=streetNo;
                acceptCardNO				= that.get("acceptcard_no"),
                dataParam['streetNo']=streetNo;
                DFProcessed_Month  		 = that.get("datefirstProcessed_month").trim(),
                dataParam['streetNo']=streetNo;
                DFProcessed_Day    		 = that.get("datefirstProcessed_day").trim(),
                dataParam['streetNo']=streetNo;
                DFProcessed_Year   		 = that.get("datefirstProcessed_year").trim(),
                dataParam['streetNo']=streetNo;
                Cur_city_card_pro  		 = that.get("c_c_card_processor").trim(),
                dataParam['streetNo']=streetNo;
                merchantID 	    		 = that.get("merchant_id").trim(),
                dataParam['streetNo']=streetNo;
                MonthlyVolumeAmountsList1   = that.get("MonthlyVolumeAmountsList1").trim(),
                dataParam['streetNo']=streetNo;
                MonthlyVolumeTicketsList1   = that.get("MonthlyVolumeTicketsList1").trim(),
                dataParam['streetNo']=streetNo;
                MonthlyVolumeAmountsList2   = that.get("MonthlyVolumeAmountsList2").trim(),
                dataParam['streetNo']=streetNo;
                MonthlyVolumeTicketsList2   = that.get("MonthlyVolumeTicketsList2").trim(),
                dataParam['streetNo']=streetNo;
                MonthlyVolumeAmountsList3   = that.get("MonthlyVolumeAmountsList3").trim(),
                dataParam['streetNo']=streetNo;
                MonthlyVolumeTicketsList3   = that.get("MonthlyVolumeTicketsList3").trim(),
                dataParam['streetNo']=streetNo;
                MonthlyVolumeAmountsList4   = that.get("MonthlyVolumeAmountsList4").trim(),
                dataParam['streetNo']=streetNo;
                MonthlyVolumeTicketsList4   = that.get("MonthlyVolumeTicketsList4").trim(),
                dataParam['streetNo']=streetNo;
                debttypeYES			     = that.get("debttype_yes"),
                dataParam['streetNo']=streetNo;
                debttypeNO			      = that.get("debttype_no"),
                dataParam['streetNo']=streetNo;
                selectDebtType			  = that.get("selectdebttype").trim(),
                dataParam['streetNo']=streetNo;
                selDisbursed			    = that.get("selDisbursed").trim(),
                dataParam['streetNo']=streetNo;
                busproInfo_owned		    = that.get("busproInfo_owned"),
                dataParam['streetNo']=streetNo;
                busproInfo_leased	       = that.get("busproInfo_leased"),
                dataParam['streetNo']=streetNo;
                outStandMortage_YES		 = that.get("outstandingMort_yes"),
                dataParam['streetNo']=streetNo;
                outStandMortage_NO		  = that.get("outstandingMort_no"),
                dataParam['streetNo']=streetNo;
                mortgageBANK			    = that.get("mortgage_bank").trim(),
                dataParam['streetNo']=streetNo;
                outStandingBAL		      = that.get("outs_bal").trim(),
                dataParam['streetNo']=streetNo;
                monthMortageAMT   	      = that.get("month_mort_amount").trim(),
                dataParam['streetNo']=streetNo;
                monthlyRENT			     = that.get("monthly_rent").trim(),
                dataParam['streetNo']=streetNo;
                landlord_NAME			   = that.get("landlord_name").trim(),
                dataParam['streetNo']=streetNo;
                contact_NUM			     = that.get("contact_number").trim(),
                dataParam['streetNo']=streetNo;
                realState			       = that.get("real_state").trim(),
                dataParam['realState']=realState;
                inventory			       = that.get("inventory").trim(),
                dataParam['inventory']=inventory;
                equipFinance			    = that.get("equip_finance").trim(),
                dataParam['equipFinance']=equipFinance;
                account_RECE		        = that.get("account_rece").trim(),
                dataParam['account_RECE']=account_RECE;
               
                console.log(dataParam);
                
                for(var i=1; i<=totbusinessDebtYesDiv;i++)
                {
                    if(jQuery.inArray( i, deleteIds )=== -1)
                    {
                        dataParam['debttype'+i]=viewFModel.get('debttype'+i);
                        dataParam['yeardisbursed'+i]=viewFModel.get('yeardisbursed'+i);
                        dataParam['txtOutCredit'+i]=viewFModel.get('txtOutCredit'+i);
                        dataParam['txtInterestCredit'+i]=viewFModel.get('txtInterestCredit'+i);
                        
                        dataParam['txtPerYearCredit'+i]=viewFModel.get('txtPerYearCredit'+i);
                        dataParam['tpcompany'+i]=viewFModel.get('tpcompany'+i);
                        dataParam['ocadvance'+i]=viewFModel.get('ocadvance'+i);
                        dataParam['funded_term'+i]=viewFModel.get('funded_term'+i);
                        
                        dataParam['collateraltype'+i]=viewFModel.get('collateraltype'+i);
                        dataParam['txtAmountTerm'+i]=viewFModel.get('txtAmountTerm'+i); 
                        dataParam['txtOutAmountTerm'+i]=viewFModel.get('txtOutAmountTerm'+i);
                        dataParam['txtInterestTerm'+i]=viewFModel.get('txtInterestTerm'+i);

                        dataParam['txtPaymentModeTerm'+i]=viewFModel.get('txtPaymentModeTerm'+i);
                        dataParam['txtYearTerm'+i]=viewFModel.get('txtYearTerm'+i);
                        dataParam['txtTerm'+i]=viewFModel.get('txtTerm'+i); 
                        dataParam['txtFrequncyTerm'+i]=viewFModel.get('txtFrequncyTerm'+i);
                                               
                    }
                }
				
        app.loginService.viewModel.showloder();
        var dataSource = new kendo.data.DataSource({
        transport: {
        read: {
                url: "http://google.com",
                type:"POST",
                dataType: "json", // "jsonp" is required for cross-domain requests; use "json" for same-domain requests
                data: dataParam
        }
        },
        schema: {
            data: function(data)
        	{
            	return [data];
        	}
        },
        error: function (e) {
        	 apps.hideLoading();
             navigator.notification.alert("Server not responding properly.Please check your internet connection.",
                function () { }, "Notification", 'OK');
        },

        });
        dataSource.fetch(function(){
            
        	var data = this.data();
            app.loginService.viewModel.hideloder();
        	if(data[0]['results']['faultcode'] === 1 || data[0]['results']['faultcode'] === "1")
            {
                
                $msg= "Business Information submitted successfully";
                app.loginService.viewModel.mobileNotification($msg,'info');
                apps.navigate('#tabstrip-loanapp-ci');

            }
            else if(data[0]['results']['faultcode'] === 0 || data[0]['results']['faultcode'] === "0")
            {
               $msg= "Business Information not submitted successfully.";
               app.loginService.viewModel.mobileNotification($msg,'info'); 
               return;
            }
            else if(data[0]['results']['faultcode'] === 3 || data[0]['results']['faultcode'] === "3")
            {
               $msg= "Please enter all fields.";
               app.loginService.viewModel.mobileNotification($msg,'info');
               return;
            }
            else{
                $msg= "Server not responding properly,Please try again";
                app.loginService.viewModel.mobileNotification($msg,'info');
                return;
            }            

        });
        
            },
            addOutDebtVar:function(num)
            {
                
                viewFModel['debttype'+num] ='';
                viewFModel['yeardisbursed'+num] ='';
                viewFModel['txtOutCredit'+num] ='';
                viewFModel['txtInterestCredit'+num] ='';
                viewFModel['txtPerYearCredit'+num] =1;
                viewFModel['tpcompany'+num] ='';
                viewFModel['ocadvance'+num] ='';
                viewFModel['funded_term'+num] ='';
                viewFModel['collateraltype'+num] ='';
                viewFModel['txtAmountTerm'+num] ='';
                viewFModel['txtOutAmountTerm'+num] ='';
                viewFModel['txtInterestTerm'+num] ='';
                viewFModel['txtYearTerm'+num] =1;
                viewFModel['txtPaymentModeTerm'+num] ='';
                viewFModel['txtTerm'+num] ='';
                viewFModel['txtFrequncyTerm'+num] =1;

            },
            addBindOutDebtVar:function(num)
            {
				kendo.bind($("#debttype"+num), viewFModel);
                kendo.bind($("#yeardisbursed"+num), viewFModel);
                kendo.bind($("#txtOutCredit"+num), viewFModel);
                kendo.bind($("#txtInterestCredit"+num), viewFModel);
                kendo.bind($("#txtPerYearCredit"+num), viewFModel);
                kendo.bind($("#tpcompany"+num), viewFModel);
                kendo.bind($("#ocadvance"+num), viewFModel);
                kendo.bind($("#funded_term"+num), viewFModel);
                kendo.bind($("#collateraltype"+num), viewFModel);
                kendo.bind($("#txtAmountTerm"+num), viewFModel);
                kendo.bind($("#txtOutAmountTerm"+num), viewFModel);
                kendo.bind($("#txtInterestTerm"+num), viewFModel);
                kendo.bind($("#txtYearTerm"+num), viewFModel);
                kendo.bind($("#txtPaymentModeTerm"+num), viewFModel);
                kendo.bind($("#txtTerm"+num), viewFModel);
                kendo.bind($("#txtFrequncyTerm"+num), viewFModel);

            },
        	deleteOutDebtVar:function(num)
            {
                
                delete  viewFModel['debttype'+num];
                delete viewFModel['yeardisbursed'+num];
                delete viewFModel['txtOutCredit'+num];
                delete viewFModel['txtInterestCredit'+num];
                delete viewFModel['txtPerYearCredit'+num];
                delete viewFModel['tpcompany'+num];
                delete viewFModel['ocadvance'+num];
                delete viewFModel['funded_term'+num];
                delete viewFModel['collateraltype'+num];
                delete viewFModel['txtAmountTerm'+num] ;
                delete viewFModel['txtOutAmountTerm'+num];
                delete viewFModel['txtInterestTerm'+num];
                delete viewFModel['txtYearTerm'+num];
                delete viewFModel['txtPaymentModeTerm'+num];
                delete viewFModel['txtTerm'+num];
                delete viewFModel['txtFrequncyTerm'+num];

            },
            
            
        
    });
   
    app.loansetting = {
        viewModel: new loanViewModal()	
    };
})(window);
