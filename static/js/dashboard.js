Handlebars.registerHelper('list', function(items, options) {
    var out = "<div class='row-fluid'>";
    var classVal = "btn btn-default answersChoice";
    if (items.length == 4)
        classVal +=' col-md-3';
    else if(items.length == 3)
        classVal +=' col-md-4';
    else if(items.length == 2)
        classVal +=' col-md-6';

	  for(var i=0, l=items.length; i<l; i++) {
	    out = out + "<button style='' attr-index='"+ i +"' class= '" + classVal +"'>" + options.fn(items[i]) + "</button>";
	  }
        return out + "</div>";
});

function getFromLocalStorage(user_identifier){
	if( window.localStorage != null ){
		return window.localStorage.getItem(user_identifier);
	}
	return {};
}

function saveIntoLocalStorage(user_identifier, user_data){
	if( window.localStorage != null ){
		window.localStorage.setItem(user_identifier, JSON.stringify(user_data));
	}
}

function getQueryParam(param_name){
	return $.url(window.location.href).param(param_name);
}

function updateParams(answersObj,user_identifier, user_data,lessonId){
    var delta = answersObj.click_handler.variable_delta

    data["begin_variables"]["balance"] = data["begin_variables"]["balance"] - delta.balance;
	data["begin_variables"]["land"] = data["begin_variables"]["land"] - delta.land;
	data["begin_variables"]["cow"] = data["begin_variables"]["cow"] - delta.cow;
    user_data[lessonId]["estimated_balance"] = data["begin_variables"]["goal_balance"]
    user_data[lessonId]["estimated_balance"] = data["begin_variables"]["max_goal"]
	if( "is_cow_action_chosen" in delta){
		data["begin_variables"]["is_cow_action_chosen"] = delta.is_cow_action_chosen;
	}
	if( "is_land_action_chosen" in delta){
		data["begin_variables"]["is_land_action_chosen"] = delta.is_land_action_chosen;
	}


    user_data[lessonId]["balance"] =  data["begin_variables"]["balance"]
    user_data[lessonId]["cow"] =  data["begin_variables"]["cow"]
    user_data[lessonId]["land"] =  data["begin_variables"]["land"]
    user_data[lessonId]["estimated_balance"] = delta.estimated_balance
    
    if( data["begin_variables"]["balance"] < 100000 || data["begin_variables"]["cow"] == 0 ||  data["begin_variables"]["land"] == 0 ){
    	$("#finishGame").show();
    }

        $("#spanCash").text(data["begin_variables"]["balance"]);
	$("#spanLand").text(data["begin_variables"]["land"]);
	$("#spanCattle").text(data["begin_variables"]["cow"]);

    saveIntoLocalStorage(user_identifier, user_data);

}

$(function(){


	
	var user_identifier = $("#user_identifier").val();
	
	var user_data = {};
	try{
		
		user_data = JSON.parse(getFromLocalStorage(user_identifier));
	}catch(e){
		
	}
	
	$("#finishGame").on('click',function(){
        $("#results_text").text("Estimated Balance: "+user_data[lessonId]["estimated_balance"] + "\n"+ "Actual Balance:"+user_data[lessonId]["balance"]);
        $("#Results").modal('show');
    });
	
	var start_game_at = data.start_node;
	if( user_data !=null && user_data[lessonId]){
		var lesson = user_data[lessonId];
		start_game_at = lesson.last_played_level;
        data["begin_variables"]["balance"] = user_data[lessonId]["balance"]
        data["begin_variables"]["land"] = user_data[lessonId]["land"]
        data["begin_variables"]["cow"] = user_data[lessonId]["cow"]

	}else{
		var chapter = {"chapter_id": lessonId, 
						last_played_level :  start_game_at, 
						started_at : new Date(),
                        balance : data.begin_variables.balance,
                        estimated_balance : data.begin_variables.estimated_balance,
                        goal_balance : data.begin_variables.goal_balance,
                        max_goal:data.begin_variables.max_goal,
                        cow:data.begin_variables.cow,
                        land: data.begin_variables.land
					};
        user_data = {};
		user_data[lessonId] = chapter;
        user_data[lessonId][test_screen_instructions] = {"entry_time" : new Date()}
		saveIntoLocalStorage(user_identifier, user_data);

        $("#spanCash").text(data["begin_variables"]["balance"]);
        $("#spanLand").text(data["begin_variables"]["land"]);
        $("#spanCattle").text(data["begin_variables"]["cow"]);
	}
	
	var test_screen_instructions = data[start_game_at];
	
	slideTmpl = Handlebars.compile($("#slideTmpl"+test_screen_instructions.question_type).html());
	
	$("#myModalLabel").html(test_screen_instructions.help_title);
	$("#help_modal_main_text").html(test_screen_instructions.help_text);

	
	$(document).on('click', '.answersChoice', function(e) {
		e.preventDefault();
		var answerIndex = $(this).attr("attr-index");
		var answersObj = currentLevel["answer_choices"][answerIndex];

		if( answersObj.click_handler.action_type == "NEXT_LEVEL"){

            updateParams(answersObj,user_identifier, user_data,lessonId);
            if ( currentLevel.level_name in user_data[lessonId])
                user_data[lessonId][currentLevel.level_name]["exit_time"] = new Date();

			currentLevel = data[answersObj.click_handler.action_value];

            user_data[lessonId][currentLevel.level_name] = {"entry_time" : new Date()}
            user_data[lessonId]['last_played_level'] = currentLevel.level_name
            saveIntoLocalStorage(user_identifier, user_data);

            $("#myModalLabel").html(currentLevel.help_title);
            $("#help_modal_main_text").html(currentLevel.help_text);

            slideTmpl = Handlebars.compile($("#slideTmpl"+currentLevel.question_type).html());
			$("#slideContainer").html(slideTmpl(currentLevel));
		}else if(answersObj.click_handler.action_type == "ANSWER_FEEDBACK"){
			if( answersObj.click_handler.action_result ){
				if( answersObj.click_handler.action_feedback != null ){


                    $("#myModalLabel").html(currentLevel.help_title);
                    $("#help_modal_main_text").html(currentLevel.help_text);

                    $("#info_on_action_title").html("Feedback information");
                    $("#info_on_action_main_text").html(answersObj.click_handler.action_feedback);
                    $("#info_on_action_modal").modal('show');

                    //alert(answersObj.click_handler.action_feedback);
				}
				if( answersObj.click_handler.action_value != null ){
                    updateParams(answersObj,user_identifier, user_data,lessonId)
                    if ( currentLevel.level_name in user_data[lessonId])
                        user_data[lessonId][currentLevel.level_name]["exit_time"] = new Date();
					currentLevel = data[answersObj.click_handler.action_value];
                    user_data[lessonId][currentLevel.level_name] = {"entry_time" : new Date()}
                    user_data[lessonId]['last_played_level'] = currentLevel.level_name
                    saveIntoLocalStorage(user_identifier, user_data);

                    $("#myModalLabel").html(currentLevel.help_title);
                    $("#help_modal_main_text").html(currentLevel.help_text);

                    slideTmpl = Handlebars.compile($("#slideTmpl"+currentLevel.question_type).html());
					$("#slideContainer").html(slideTmpl(currentLevel));


				}
			}else{
				if( answersObj.click_handler.action_feedback != null ){
                    $("#info_on_action_title").html("Feedback information");
                    $("#info_on_action_main_text").html(answersObj.click_handler.action_feedback);
                    $("#info_on_action_modal").modal('show');
				}
			}
		}
		
	});

	currentLevel = data[start_game_at]	
	$("#slideContainer").html(slideTmpl(currentLevel));


});
