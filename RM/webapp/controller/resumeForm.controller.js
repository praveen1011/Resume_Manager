sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	var ResumeData  = { personal : {
						name : "",
						role: "",
						address: "",
						email: "",
						github: "",
						lmail: "",
						phno: "",
						cobj: ""
						},
						education : {} ,
						skills : {} , 
						projects : {} , 
						experience : {} };
	return Controller.extend("ns.RM.controller.resumeForm", {
		onInit: function () {
			this.eduCount = 0;
			this.Experince = 1;
			this.Projects = 0;
			this.skill = 0;
			this.skdata = [];
			this.eddata = [];
		},
		onEduClick: function(){
			var type = this.byId("eduType").getValue();
			this.byId("eduType").setValue("");
			if(type === ""){
				alert("please enter Course Name");
				return;
			}
			if(this.eddata.includes(type)){
				alert("Course Already Exists");
				return;
			}
			var id = "edu"  + this.eduCount;
			this.eduCount = this.eduCount + 1;
			ResumeData.education[id] = { relieved : "" , joined : "" , cName : "" , Stream : type , score : ""};
			var formContainer = new sap.ui.layout.form.FormContainer({"title":type });
			var formElement = new sap.ui.layout.form.FormElement({label:"Duration"});
			var formElement1 = new sap.ui.layout.form.FormElement({label:"College Name"});
			var formElement2 = new sap.ui.layout.form.FormElement({label:"Score"});
			var formElement3 = new sap.ui.layout.form.FormElement();
			var inp = new sap.m.Input({ type: sap.m.InputType.Text, placeholder: "Enter Relieved Year",id : id + "_relieved" });
			var inp1 = new sap.m.Input({ type: sap.m.InputType.Text, placeholder: "Enter Join Year", id : id + "_joined"});
			var inp2 = new sap.m.Input({ type: sap.m.InputType.Text, placeholder: "Enter College Name", id : id + "_cName"});
			var inp3 = new sap.m.Input({ type: sap.m.InputType.Text, placeholder: "Cgpa/Percentage", id : id + "_score"});
			var btn = new sap.m.Button({ type : sap.m.ButtonType.Reject, icon : "sap-icon://delete"});
			formElement.addField(inp);
			formElement.addField(inp1);
			formElement1.addField(inp2);
			formElement2.addField(inp3);
			formElement3.addField(btn);
			formContainer.addFormElement(formElement);
			formContainer.addFormElement(formElement1);
			formContainer.addFormElement(formElement2);
			formContainer.addFormElement(formElement3);
			this.byId("education").addFormContainer(formContainer);
			inp.attachChange(this.onChange,{key3: "relieved", key1:"education", key2: id});
			inp1.attachChange(this.onChange,{key3: "joined", key1:"education", key2: id});
			inp2.attachChange(this.onChange,{key3: "cName", key1:"education", key2: id});
			inp3.attachChange(this.onChange,{key3: "score", key1:"education", key2: id});			
			btn.attachPress(this.onDelete,{obj : formContainer, parentKey:"education", key: id});
			console.log(ResumeData);
		},
		onExpClick: function(){
			var id = "exp"  + this.Experince;
			this.Experince = this.Experince + 1;
			ResumeData.experience[id] = { relieved : "" , joined : "" , cName : "" , description : ""};
			var formContainer = new sap.ui.layout.form.FormContainer({"title": id });
			var formElement = new sap.ui.layout.form.FormElement({label:"Duration"});
			var formElement1 = new sap.ui.layout.form.FormElement({label:"Company Name"});
			var formElement2 = new sap.ui.layout.form.FormElement({label:"Work Description"});
			var formElement3 = new sap.ui.layout.form.FormElement();
			var inp = new sap.m.Input({ type: sap.m.InputType.Text, placeholder: "Enter Relieved Year", id : id + "_relieved" });
			var inp1 = new sap.m.Input({ type: sap.m.InputType.Text, placeholder: "Enter Join Year", id : id + "_joined"});
			var inp2 = new sap.m.Input({ type: sap.m.InputType.Text, placeholder: "Enter Company Name", id : id + "_cName"});
			var inp4 = new sap.m.TextArea({placeholder: "Description", id : id + "_description"});
			var btn = new sap.m.Button({ type : sap.m.ButtonType.Reject, icon : "sap-icon://delete"});
			formElement.addField(inp);
			formElement.addField(inp1);
			formElement1.addField(inp2);
			formElement2.addField(inp4);
			formElement3.addField(btn);
			formContainer.addFormElement(formElement);
			formContainer.addFormElement(formElement1);
			formContainer.addFormElement(formElement2);
			formContainer.addFormElement(formElement3);
			inp.attachChange(this.onChange,{key3: "relieved", key1:"experience", key2: id});
			inp1.attachChange(this.onChange,{key3: "joined", key1:"experience", key2: id});
			inp2.attachChange(this.onChange,{key3: "cName", key1:"experience", key2: id});
			inp4.attachChange(this.onChange,{key3: "description", key1:"experience", key2: id});
			btn.attachPress(this.onDelete,{obj : formContainer, parentKey:"experience", key: id});
			this.byId("experience").addFormContainer(formContainer);

		},
		onSkillClick: function(){
			var type = this.byId("skillName").getValue();
			this.byId("skillName").setValue("");
			if(type === ""){
				alert("please enter Skill Name");
				return;
			}
			if(this.skdata.includes(type)){
				alert("Skill Already Exists");
				return;
			}
			ResumeData.skills[type] = 0;
			var formElement = new sap.ui.layout.form.FormElement({label:type});
			var btn = new sap.m.Button({ type : sap.m.ButtonType.Reject, icon : "sap-icon://delete"});
			var inp = new sap.m.Input({ type: sap.m.InputType.Number, placeholder: "Enter Rating",id : type});
			formElement.addField(inp);
			formElement.addField(btn);
			btn.attachPress(this.onDelete,{obj : formElement, parentKey:"skills", key: type});
			inp.attachChange(this.onChange,{key1:"skills", key2: type});
			this.byId("skillCon").addFormElement(formElement);

		},
		onProjClick: function(){
			var id = "proj"  + this.Projects;
			this.Projects = this.Projects + 1;
			ResumeData.projects[id] = { pName : "" , techs : "" , description : ""};
			var formContainer = new sap.ui.layout.form.FormContainer({"title": id});
			var formElement = new sap.ui.layout.form.FormElement({label:"Project Name"});
			var formElement1 = new sap.ui.layout.form.FormElement({label:"Tecnologies Used"});
			var formElement2 = new sap.ui.layout.form.FormElement({label:"Description"});
			var formElement3 = new sap.ui.layout.form.FormElement();
			var inp = new sap.m.Input({ type: sap.m.InputType.Text, placeholder: "Enter Project Name", id : id + "_pName"});
			var inp1 = new sap.m.Input({ type: sap.m.InputType.Text, placeholder: "Enter Technologies Used Seperated by ','", id : id + "_techs"});
			var inp2 = new sap.m.TextArea({placeholder: "Description", id : id + "_description"});
			var btn = new sap.m.Button({ type : sap.m.ButtonType.Reject, icon : "sap-icon://delete"});
			formElement.addField(inp);
			formElement1.addField(inp1);
			formElement2.addField(inp2);
			formElement3.addField(btn);
			formContainer.addFormElement(formElement);
			formContainer.addFormElement(formElement1);
			formContainer.addFormElement(formElement2);
			formContainer.addFormElement(formElement3);
			inp.attachChange(this.onChange,{key3: "pName", key1:"projects", key2: id});
			inp1.attachChange(this.onChange,{key3: "techs", key1:"projects", key2: id});
			inp2.attachChange(this.onChange,{key3: "description", key1:"projects", key2: id});
			btn.attachPress(this.onDelete,{obj : formContainer, parentKey:"projects", key: id});
			this.byId("Projects").addFormContainer(formContainer);
		},
		onClick: function(oEvent){
			var data = {personal : ResumeData.personal, 
						education : [] ,
						skills : [] , 
						projects : [] , 
						experience : [] },
			key = "";
			for(key in ResumeData.education)
			{
				data.education.push(ResumeData.education[key]);
			}
			for(key in ResumeData.skills)
			{
				data.skills.push({key : ResumeData.skills[key]});
			}
			for(key in ResumeData.projects)
			{
				data.projects.push(ResumeData.projects[key]);
			}
			for(key in ResumeData.experience)
			{
				data.experience.push(ResumeData.experience[key]);
			}
			console.log(data);
		},
		onChange: function(oEvent){
			var params = oEvent.getParameters();
			var val = params.newValue;
			if(this.key1 === "skills")
			{
				ResumeData[this.key1][this.key2] = val;
			}else{
				ResumeData[this.key1][this.key2][this.key3] = val;
			}
			console.log(ResumeData);
		},
		onPersonalChange: function(oEvent){
			var params = oEvent.getParameters();
			console.log(ResumeData);
			var val = params.newValue;
			var id = params.id.split("--")[1];
			ResumeData.personal[id] = val;
			console.log(ResumeData);
		},
		onDelete: function(){
			delete ResumeData[this.parentKey][this.key];
			this.obj.destroy();
			console.log(ResumeData);
			console.log("Boom!!!!");
		}
	});
});