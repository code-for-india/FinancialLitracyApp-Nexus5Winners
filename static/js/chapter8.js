var data = {
	"start_node": "LEVEL_WORTH",
	"type": "decision_tree",
	"begin_variables": {
			"balance": 100000,
			"estimated_balance": 100000,
			"goal_balance" : 190000,
			"max_goal" : 305000,
			"action_summary":[],
			"cow": 1, 
			"land": 1, 
			"is_cow_action_chosen" :false,
			"is_land_action_chosen" :false
		},
	"LEVEL_WORTH":{
		"question_type": "1",
        "level_name" : "LEVEL_WORTH",
		"question_text": "<h3>Hari's Assets</h3>Resources with Hari <ul><li>1 Acre of land - worth Rs 1,20,000</li><li>1 Cow - worth 85,000</li><li>Rs 1,00,000 cash</li></ul><br><strong>What is the total value of Hari's assets?</strong>",
		"background_image": "",
		"question_images": [""],
		"help_title" : "Net Assets", 
		"help_text": "<div>The total value of cash and all the other properties that a person has is their assets.</div><div>Items that can be included as assets - Cow, Land, Home, Gold ornaments, Automobiles, etc.</div>",
		
		"answer_choices" :[{
				"answer_image_url": "",
				"answer_text": "Rs 3,05,000",
				"click_handler": {
					"variable_delta": {
						"balance": 0,
						"gain" : 0,
						"loss" : 0,
						"cow": 0, 
						"land": 0,
						"estimated_balance": 0,
					}, 
					"action_result": true,
					//"action_feedback": "Great. Let's proceed.",
					"action_type": "ANSWER_FEEDBACK",
					"action_value": "LEVEL_EXPENSES"
				} 
			},
			{
				"answer_image_url": "",
				"answer_text": "Rs 2,90,000",
				"click_handler": {
					"variable_delta": {
						"balance": 0,
						"gain" : 0,
						"loss" : 0,
						"cow": 0, 
						"land": 0,
						"estimated_balance": 0,
					}, 
					"action_result" : false,
					"action_feedback": "OOPS! Please try again. Click on the help button for definition on what is net assets.",
					"action_type": "ANSWER_FEEDBACK",
				} 
			},
			{
				"answer_image_url": "",
				"answer_text": "3,15,000",
				"click_handler": {
					"variable_delta": {
						"balance": 0,
						"gain" : 0,
						"loss" : 0,
						"cow": 0, 
						"land": 0,
						"estimated_balance": 0,
					},
                    "action_result" : false,
                    "action_feedback": "OOPS! Please try again. Click on the help button for definition on what is net assets.",
                    "action_type": "ANSWER_FEEDBACK",
				} 
			},
			{
				"answer_image_url": "",
				"answer_text": "3,10,000",
				"click_handler": {
					"variable_delta": {
						"balance": 0,
						"gain" : 0,
						"loss" : 0,
						"cow": 0, 
						"land": 0,
						"estimated_balance": 0
					},
                    "action_result" : false,
                    "action_feedback": "OOPS! Please try again. Click on the help button for definition on what is net assets.",
                    "action_type": "ANSWER_FEEDBACK"
				} 
			},
		]
		
	},
    "LEVEL_EXPENSES":{
        "question_type": "2",
        "level_name" : "LEVEL_EXPENSES",
        "question_text": "<h3>Hari's Expenses</h3>Needs and wants of Hari <ul><li>Send his daughter to college - 1,20,000</li><li>Sustain his family - Yearly cost 50,000</li><li>Sustain his cattle - Yearly cost 20,000</li></ul><br><strong>What is the total value of Hari's expenses?</strong>",
        "background_image": "",
        "question_images": [""],
        "help_title" : "Net expenses",
        "help_text": "<div>The total value of all the expenses across the year.</div><div>This includes wants like sending his daughter to college and basic necessities like sustaining the family and sustaining the cattle</div>",

        "answer_choices" :[{
            "answer_image_url": "",
            "answer_text": "Rs 1,70,000",
            "click_handler": {
                "variable_delta": {
                    "balance": 0,
                    "gain" : 0,
                    "loss" : 0,
                    "cow": 0,
                    "land": 0,
                    "estimated_balance": 0,
                },
                "action_result" : false,
                "action_feedback": "OOPS! Please try again. Click on the help button for definition on what is net assets.",
                "action_type": "ANSWER_FEEDBACK"
            }
        },
            {
                "answer_image_url": "",
                "answer_text": "Rs 1,90,000",
                "click_handler": {
                    "variable_delta": {
                        "balance": 0,
                        "gain" : 0,
                        "loss" : 0,
                        "cow": 0,
                        "land": 0,
                        "estimated_balance": 0,
                    },
                    "action_result": true,
                    //"action_feedback": "Great. Let's proceed.",
                    "action_type": "ANSWER_FEEDBACK",
                    "action_value": "LEVEL_1"
                }
            },
            {
                "answer_image_url": "",
                "answer_text": "1,95,000",
                "click_handler": {
                    "variable_delta": {
                        "balance": 0,
                        "gain" : 0,
                        "loss" : 0,
                        "cow": 0,
                        "land": 0,
                        "estimated_balance": 0,
                    },
                    "action_result" : false,
                    "action_feedback": "OOPS! Please try again. Click on the help button for definition on what is net assets.",
                    "action_type": "ANSWER_FEEDBACK"
                }
            },
            {
                "answer_image_url": "",
                "answer_text": "1,92,000",
                "click_handler": {
                    "variable_delta": {
                        "balance": 0,
                        "gain" : 0,
                        "loss" : 0,
                        "cow": 0,
                        "land": 0,
                        "estimated_balance": 0,
                    },
                    "action_result" : false,
                    "action_feedback": "OOPS! Please try again. Click on the help button for definition on what is net assets.",
                    "action_type": "ANSWER_FEEDBACK"
                }
            },
        ]

    },
	"LEVEL_1":{
		"question_type": "2",
        "level_name" : "LEVEL_1",
		"question_text": "Now that you know the total worth of your assets and expenses, you can choose an option to get started with",
		"background_image": "",
		"question_images": [""],
		"answer_choices" :[
			{
				"answer_image_url": "Bank.png",
				"answer_text": "Save in Bank",
				"click_handler": {
					"variable_delta": {
						"balance": 0,
						"gain" : 0,
						"loss" : 0,
						"cow": 0, 
						"land": 0,
						"estimated_balance": 0,
					},
                    "action_result" : true,
					"action_type": "NEXT_LEVEL",
					"action_value": "LEVEL_2_1"
				} 
			},
			{
				"answer_image_url": "piggy-bank.png",
				"answer_text": "Save in Piggy bank",
				"click_handler": {
					"variable_delta": {
						"balance": 0,
						"gain" : 0,
						"loss" : 0,
						"cow": 0, 
						"land": 0,
						"estimated_balance": 0,
					},
                    "action_result" : true,
                    "action_type": "NEXT_LEVEL",
                    "action_value": "LEVEL_2_2"
				} 
			},
			{
				"answer_image_url": "cow.png",
				"answer_text": "Use Cattle",
				"click_handler": {
					"variable_delta": {
						"balance": 0,
						"gain" : 0,
						"loss" : 0,
						"cow": 0, 
						"land": 0,
						"estimated_balance": 0,
					},
                    "action_result" : true,
                    "action_type": "NEXT_LEVEL",
                    "action_value": "LEVEL_2_3"
				} 
			},
			{
				"answer_image_url": "Wheet.png",
				"answer_text": "Use Land",
				"click_handler": {
					"variable_delta": {
						"balance": 0,
						"gain" : 0,
						"loss" : 0,
						"cow": 0, 
						"land": 0,
						"estimated_balance": 0,
					},
                    "action_result" : true,
                    "action_type": "NEXT_LEVEL",
                    "action_value": "LEVEL_2_4"
				} 
			},
		]
		
	},
	"LEVEL_2_1":{
		"question_type": "1",
        "level_name" : "LEVEL_2_1",
		"question_text": "Rate of interest that CITI bank gives you is 10% p.a. How much do you want to invest in CITI bank?",
		"background_image": "",
		"question_images": [""],
        "help_title" : "Interest",
        "help_text": "<div>When you lend your money to someone, they pay interest for the same. </div><div>How to calculate Interest?</div><backquote>Interest = principal(the amount you invested) x Percentage of Interest x Duration in years<br> ex. If you gave the bank Rs 1000 for 1 year at 10% you get an interest of Rs 100.</backquote>",
		"answer_choices" :[
			{
				"answer_image_url": "",
				"answer_text": "20,000",
				"click_handler": {
					"variable_delta": {
						"balance": 20000,
						"gain" : 2000,
						"loss" : 0,
						"cow": 0, 
						"land": 0,
						"estimated_balance": 102000
					},
                    "action_result": true,
                    "action_feedback": "Thank you for investing in CITI bank! The amount invested by you is 20,000 and this amount is locked for one year.  The amount remaining is 100,000. At the end of one year the estimated amount is 102000 i.e. <blockquote> Principal + interest</blockquote> ",
                    "action_type": "ANSWER_FEEDBACK",
                    "action_value": "LEVEL_1"
				} 
			},
			{
				"answer_image_url": "",
				"answer_text": "40,000",
				"click_handler": {
					"variable_delta": {
						"balance": 40000,
						"gain" : 4000,
						"loss" : 0,
						"cow": 0, 
						"land": 0,
						"estimated_balance": 104000,
					},
                    "action_result": true,
                    "action_feedback": "Thank you for investing in CITI bank! The amount invested by you is 40,000 and this amount is locked for one year.  The amount remaining is 80,000. At the end of one year the estimated amount is <b> 104000</b>  i.e. <blockquote> Principal + interest</blockquote> ",
                    "action_type": "ANSWER_FEEDBACK",
                    "action_value": "LEVEL_1"
                }
			},
			{
				"answer_image_url": "",
				"answer_text": "60,000",
				"click_handler": {
					"variable_delta": {
						"balance": 60000,
						"gain" : 6000,
						"loss" : 0,
						"cow": 0, 
						"land": 0,
						"estimated_balance": 106000,
					},
                    "action_result": true,
                    "action_feedback": "Thank you for investing in CITI bank! The amount invested by you is 60,000 and this amount is locked for one year.  The amount remaining is 60,000. At the end of one year the estimated amount is <b> 106000</b>  i.e. <blockquote> Principal + interest</blockquote> ",
                    "action_type": "ANSWER_FEEDBACK",
                    "action_value": "LEVEL_1"
                }
			},
			{
				"answer_image_url": "",
				"answer_text": "80,000",
				"click_handler": {
					"variable_delta": {
						"balance": 80000,
						"gain" : 8000,
						"loss" : 0,
						"cow": 0, 
						"land": 0,
						"estimated_balance": 108000,
					},
                    "action_result": true,
                    "action_feedback": "Thank you for investing in CITI bank! The amount invested by you is 80,000 and this amount is locked for one year.  The amount remaining is 40,000. At the end of one year the estimated amount is <b>108000</b> i.e. <blockquote> Principal + interest</blockquote> ",
                    "action_type": "ANSWER_FEEDBACK",
                    "action_value": "LEVEL_1"
                }
			}
		]
	},
    "LEVEL_2_2":{
    "question_type": "1",
        "level_name" : "LEVEL_2_2",
        "question_text": "Rate of interest that Piggy bank gives you is 0% p.a.How much do you want to invest in Piggy bank?",
        "background_image": "",
        "question_images": [""],
        "help_title" : "Interest",
        "help_text": "<div>When you lend your money to someone, they pay interest for the same. </div><div>How to calculate Interest?</div><backquote>Interest = principal(the amount you invested) x Percentage of Interest x Duration in years<br><b>But please keep in mind piggy bank is not an official bank which will be able to provide you any interest for your money. It is not an official way of saving money.</b></backquote>",
        "answer_choices" :[
        {
            "answer_image_url": "",
            "answer_text": "20,000",
            "click_handler": {
                "variable_delta": {
                    "balance": 20000,
                    "gain" : 0,
                    "loss" : 0,
                    "cow": 0,
                    "land": 0,
                    "estimated_balance": 100000,
                },
                "action_result": true,
                "action_feedback": "Thank you for saving some money at your Piggy bank. You can take it back anytime and this type of savings does not provide any interest with time.",
                "action_type": "ANSWER_FEEDBACK",
                "action_value": "LEVEL_1"
            }
        },
        {
            "answer_image_url": "",
            "answer_text": "40,000",
            "click_handler": {
                "variable_delta": {
                    "balance": 40000,
                    "gain" : 0,
                    "loss" : 0,
                    "cow": 0,
                    "land": 0,
                    "estimated_balance": 100000,
                },
                "action_result": true,
                "action_feedback": "Thank you for saving some money at your Piggy bank. You can take it back anytime and this type of savings does not provide any interest with time.",
                "action_type": "ANSWER_FEEDBACK",
                "action_value": "LEVEL_1"
            }
        },
        {
            "answer_image_url": "",
            "answer_text": "60,000",
            "click_handler": {
                "variable_delta": {
                    "balance": 60000,
                    "gain" : 0,
                    "loss" : 0,
                    "cow": 0,
                    "land": 0,
                    "estimated_balance": 100000,
                },
                "action_result": true,
                "action_feedback": "Thank you for saving some money at your Piggy bank. You can take it back anytime and this type of savings does not provide any interest with time.",
                "action_type": "ANSWER_FEEDBACK",
                "action_value": "LEVEL_1"
            }
        },
        {
            "answer_image_url": "",
            "answer_text": "80,000",
            "click_handler": {
                "variable_delta": {
                    "balance": 0,
                    "gain" : 0,
                    "loss" : 0,
                    "cow": 0,
                    "land": 0,
                    "estimated_balance": 100000,
                },
                "action_result": true,
                "action_feedback": "Thank you for saving some money at your Piggy bank. You can take it back anytime and this type of savings does not provide any interest with time.",
                "action_type": "ANSWER_FEEDBACK",
                "action_value": "LEVEL_1"
            }
        }
    ]
},
	"LEVEL_2_3": {
		"question_type": "1",
        "level_name" : "LEVEL_2_3",
		"question_text": "Cattle - Your cattle gives you milk. Manage it effectively.",
		"background_image": "",
		"question_images": [""],
        "help_title" : "Short Term vs Long Term",
        "help_text": "<div>Always think about both short and long term when taking financial decisions. </div><div>Assets can give you long term continuous returns while using them.</div>",
		"answer_choices" :[
			{
				"answer_image_url": "milk_icon.png",
				"answer_text": "Sell milk (Earn Rs 50,000 yearly)",
				"click_handler": {
					"variable_delta": {
						"balance": 50000,
						"gain" : 50000,
						"loss" : 0,
						"cow": 0, 
						"land": 0,
						"estimated_balance": 130000,
					}, 
					"action_type": "NEXT_LEVEL",
					"action_value": "LEVEL_2_3_1"
				} 
			}, 
			{
				"answer_image_url": "rupee.png",
				"answer_text": "Sell Cow (One time Rs 85,000)",
				"click_handler": {
					"variable_delta": {
						"balance": 0,
						"gain" : 85000,
						"loss" : 0,
						"cow": 0, 
						"land": 0,
						"estimated_balance": 130000,
					}, 
					"action_type": "NEXT_LEVEL",
					"action_value": "LEVEL_2_3_2"
				} 
			}
		]
	}, 
	"LEVEL_2_3_1" : {
		"question_type": "1",
        "level_name" : "LEVEL_2_3_1",
		"question_text": "Great you are selling milk from the cow.<br>This will give you a constant income of Rs 50,000 over many months to come. <br><strong>Great! You have the cow with you</strong>",
		"background_image": "cow_bell_icon.png",
		"question_images": [""],
        "help_title" : "Short Term vs Long Term",
        "help_text": "<div>Always think about both short and long term when taking financial decisions. </div><div>Assets can give you long term continuous returns while using them.</div>",
		"answer_choices" :[
			{
				"answer_image_url": "",
				"answer_text": "Continue",
				"click_handler": {
					"variable_delta": {
						"balance": 0,
						"gain" : 50000,
						"loss" : 0,
						"cow": 0, 
						"land": 0,
						"estimated_balance": 130000,
						"is_cow_action_chosen": true
					}, 
					"action_type": "NEXT_LEVEL",
					"action_value": "LEVEL_1"
				} 
			}
		]
	}, 
	"LEVEL_2_3_2" : {
		"question_type": "1",
        "level_name" : "LEVEL_2_3_2",
		"question_text": "Are you sure you want to sell the cow?.<br>This will give you one time income, but you will lose your beloved cow. <br><strong>You have to purchase milk now</strong>",
		"background_image": "sad-cow.png",
		"question_images": [""],
        "help_title" : "Short Term vs Long Term",
        "help_text": "<div>Always think about both short and long term when taking financial decisions. </div><div>Assets can give you long term continuous returns while using them.</div>",
		"answer_choices" :[
			{
				"answer_image_url": "",
				"answer_text": "Sell it, I will buy milk outside",
				"click_handler": {
					"variable_delta": {
						"balance": 0,
						"gain" : 85000,
						"loss" : 0,
						"cow": 1,
						"land": 0,
						"estimated_balance": 185000,
						"is_cow_action_chosen": true
					}, 
					"action_type": "NEXT_LEVEL",
					"action_value": "LEVEL_1"
				} 
			}, 
			{
				"answer_image_url": "",
				"answer_text": "No! I don't want to sell my cow. ",
				"click_handler": {
					"variable_delta": {
						"balance": 0,
						"gain" : 0,
						"loss" : 0,
						"cow": 0, 
						"land": 0,
						"estimated_balance": 0,
						"is_cow_action_chosen": false
					}, 
					"action_type": "NEXT_LEVEL",
					"action_value": "LEVEL_1"
				} 
			}
		]
	},
	"LEVEL_2_4": {
		"question_type": "1",
        "level_name" : "LEVEL_2_4",
		"question_text": "Land - Your land is your asset. Manage it effectively.",
		"background_image": "",
		"question_images": [""],
        "help_title" : "Short Term vs Long Term",
        "help_text": "<div>Always think about both short and long term when taking financial decisions. </div><div>Assets can give you long term continuous returns while using them.</div>",
		"answer_choices" :[
			{
				"answer_image_url": "wheet.png",
				"answer_text": "Agriculture (Rs 80,000 yearly)",
				"click_handler": {
					"variable_delta": {
						"balance": 0,
						"gain" : 80000,
						"loss" : 0,
						"cow": 0, 
						"land": 0,
						"estimated_balance": 130000,
					}, 
					"action_type": "NEXT_LEVEL",
					"action_value": "LEVEL_2_4_1"
				} 
			}, 
			{
				"answer_image_url": "shop_icon.png",
				"answer_text": "Rent land to sunil for shop (Rs 20,000)",
				"click_handler": {
					"variable_delta": {
						"balance": 0,
						"gain" : 20000,
						"loss" : 0,
						"cow": 0, 
						"land": 0,
						"estimated_balance": 130000,
					}, 
					"action_type": "NEXT_LEVEL",
					"action_value": "LEVEL_2_4_2"
				} 
			}, 
			{
				"answer_image_url": "rupee.png",
				"answer_text": "Sell Land (One time Rs 1,20,000)",
				"click_handler": {
					"variable_delta": {
						"balance": 0,
						"gain" :120000,
						"loss" : 0,
						"cow": 0, 
						"land": 0,
						"estimated_balance": 130000,
					}, 
					"action_type": "NEXT_LEVEL",
					"action_value": "LEVEL_2_4_3"
				} 
			}
		]
	},
	"LEVEL_2_4_1" : {
		"question_type": "1",
        "level_name" : "LEVEL_2_4_1",
		"question_text": "Great you chose to cultivate on your own land?.<br>Did you know that cultivation is risky, and you have a 1 in 7 years it can fail due to dry climate. <br><strong>Farming is a High Risk - High Gain choice</strong>",
		"background_image": "Wheet.png",
		"question_images": [""],
        "help_title" : "Farming risk",
        "help_text": "<div>Farming can be risky but highly profitable. </div><div>The return can vary between years depending on the rain.</div><div><ul><li>Normal year - You earn Rs 80,000</li><li>Dry year - You earn only 20% of a normal year. You earn Rs 16,000</li></ul></div>",
		"answer_choices" :[
			{
				"answer_image_url": "",
				"answer_text": "Yes, I will try agricultute",
				"click_handler": {
					"variable_delta": {
						"balance": 0,
						"gain" : 80000,
						"loss" : 0,
						"cow": 0, 
						"land": 0,
						"failure_outcome_chance": 7,
						"failure_gain": 16000,
						"estimated_balance": 80000,
						"is_land_action_chosen": true
					}, 
					"action_type": "NEXT_LEVEL",
					"action_value": "LEVEL_1"
				} 
			}, 
			{
				"answer_image_url": "",
				"answer_text": "No! I don't want to try agriculture. ",
				"click_handler": {
					"variable_delta": {
						"balance": 0,
						"gain" : 0,
						"loss" : 0,
						"cow": 0, 
						"land": 0,
						"estimated_balance": 0,
						"is_land_action_chosen": false
					}, 
					"action_type": "NEXT_LEVEL",
					"action_value": "LEVEL_1"
				} 
			}
		]
	},
	"LEVEL_2_4_2" : {
		"question_type": "1",
        "level_name" : "LEVEL_2_4_2",
		"question_text": "Rent land to your friend?.<br>Renting is a low risk - low gain choice. ",
		"background_image": "shop_icon.png",
		"question_images": [""],
        "help_title" : "Low Risk - Low Gain",
        "help_text": "<div>At times Risk is necessary for high income. Renting is a low risk option and will only give low returns.</div>",
		"answer_choices" :[
			{
				"answer_image_url": "",
				"answer_text": "Yes, I will rent land",
				"click_handler": {
					"variable_delta": {
						"balance": 0,
						"gain" : 20000,
						"loss" : 0,
						"cow": 0, 
						"land": 0,
						"estimated_balance": 120000,
						"is_land_action_chosen": true
					}, 
					"action_type": "NEXT_LEVEL",
					"action_value": "LEVEL_1"
				} 
			}, 
			{
				"answer_image_url": "",
				"answer_text": "No! I don't want to rent. ",
				"click_handler": {
					"variable_delta": {
						"balance": 0,
						"gain" : 0,
						"loss" : 0,
						"cow": 0, 
						"land": 0,
						"estimated_balance": 0,
						"is_land_action_chosen": false
					}, 
					"action_type": "NEXT_LEVEL",
					"action_value": "LEVEL_1"
				} 
			}
		]
	},
	"LEVEL_2_4_3" : {
		"question_type": "1",
        "level_name" : "LEVEL_2_4_3",
		"question_text": "Sell Land!.<br>Land is an asset, are you sure? <br>Once you sell, you cannot use the land again. ",
		"background_image": "rupee.png",
		"question_images": [""],
		"help_title" : "Short Term vs Long Term",
        "help_text": "<div>Always think about both short and long term when taking financial decisions. </div><div>Assets can give you long term continuous returns while using them.</div>",
		"answer_choices" :[
			{
				"answer_image_url": "",
				"answer_text": "Yes, I will sell land",
				"click_handler": {
					"variable_delta": {
						"balance": 0,
						"gain" : 120000,
						"loss" : 0,
						"cow": 0, 
						"land": 1,
						"estimated_balance": 220000,
						"is_land_action_chosen": true
					}, 
					"action_type": "NEXT_LEVEL",
					"action_value": "LEVEL_1"
				} 
			}, 
			{
				"answer_image_url": "",
				"answer_text": "No! I don't want to rent. ",
				"click_handler": {
					"variable_delta": {
						"balance": 0,
						"gain" : 0,
						"loss" : 0,
						"cow": 0, 
						"land": 0,
						"estimated_balance": 0,
						"is_land_action_chosen": false
					}, 
					"action_type": "NEXT_LEVEL",
					"action_value": "LEVEL_1"
				} 
			}
		]
	}
	
}
