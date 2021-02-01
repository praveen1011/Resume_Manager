sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	var ResumeData  = { personal : {
						name : "",
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
			this.lvdata = "";
		},
		onEduClick: function(){
			var type = this.byId("eduType").getValue();
			if(type === ""){
				alert("please enter Skill Name");
				return;
			}
			var id = "edu"  + this.eduCount;
			this.eduCount = this.eduCount + 1;
			ResumeData.education[id] = { relieved : "" , joined : "" , cName : "" , Stream : type , score : ""};
			var formContainer = new sap.ui.layout.form.FormContainer({"title":type });
			var formElement = new sap.ui.layout.form.FormElement({label:"Duration"});
			var formElement1 = new sap.ui.layout.form.FormElement({label:"College Name"});
			var formElement2 = new sap.ui.layout.form.FormElement({label:"Score"});
			var inp = new sap.m.Input({ type: sap.m.InputType.Text, placeholder: "Enter Relieved Year",id : id + "_relieved" });
			var inp1 = new sap.m.Input({ type: sap.m.InputType.Text, placeholder: "Enter Join Year", id : id + "_joined"});
			var inp2 = new sap.m.Input({ type: sap.m.InputType.Text, placeholder: "Enter College Name", id : id + "_cName"});
			var inp3 = new sap.m.Input({ type: sap.m.InputType.Text, placeholder: "Cgpa/Percentage", id : id + "_score"});
			formElement.addField(inp);
			formElement.addField(inp1);
			formElement1.addField(inp2);
			formElement2.addField(inp3);
			formContainer.addFormElement(formElement);
			formContainer.addFormElement(formElement1);
			formContainer.addFormElement(formElement2);
			this.byId("education").addFormContainer(formContainer);
			inp.attachChange(this.onEduChange);
			inp1.attachChange(this.onEduChange);
			inp2.attachChange(this.onEduChange);
			inp3.attachChange(this.onEduChange);
			console.log(ResumeData);
		},
		onExpClick: function(){
			var id = "exp"  + this.Experince;
			this.Experince = this.Experince + 1;
			ResumeData.experience[id] = { relieved : "" , joined : "" , cName : "" , role : "" , description : ""};
			var formContainer = new sap.ui.layout.form.FormContainer({"title": id });
			var formElement = new sap.ui.layout.form.FormElement({label:"Duration"});
			var formElement1 = new sap.ui.layout.form.FormElement({label:"Company/Role"});
			var formElement2 = new sap.ui.layout.form.FormElement({label:"Work Description"});
			var inp = new sap.m.Input({ type: sap.m.InputType.Text, placeholder: "Enter Relieved Year", id : id + "_relieved" });
			var inp1 = new sap.m.Input({ type: sap.m.InputType.Text, placeholder: "Enter Join Year", id : id + "_joined "});
			var inp2 = new sap.m.Input({ type: sap.m.InputType.Text, placeholder: "Enter Company Name", id : id + "_cName"});
			var inp3 = new sap.m.Input({ type: sap.m.InputType.Text, placeholder: "Enter Role Name", id : id + "_role"});
			var inp4 = new sap.m.TextArea({placeholder: "Description", id : id + "_description"});
			formElement.addField(inp);
			formElement.addField(inp1);
			formElement1.addField(inp2);
			formElement1.addField(inp3);
			formElement2.addField(inp4);
			formContainer.addFormElement(formElement);
			formContainer.addFormElement(formElement1);
			formContainer.addFormElement(formElement2);
			inp.attachChange(this.onExpChange);
			inp1.attachChange(this.onExpChange);
			inp2.attachChange(this.onExpChange);
			inp3.attachChange(this.onExpChange);
			inp4.attachChange(this.onExpChange);
			this.byId("experience").addFormContainer(formContainer);

		},
		onSkillClick: function(){
			var type = this.byId("skillName").getValue();
			if(type === ""){
				alert("please enter Skill Name");
				return;
			}
			ResumeData.projects[type] = 0;
			var formElement = new sap.ui.layout.form.FormElement({label:type});
			var inp = new sap.m.Input({ type: sap.m.InputType.Number, placeholder: "Enter Rating",id : type});
			formElement.addField(inp);
			inp.attachChange(this.onSkillChange);
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
			var inp = new sap.m.Input({ type: sap.m.InputType.Text, placeholder: "Enter Project Name", id : id + "_pName"});
			var inp1 = new sap.m.Input({ type: sap.m.InputType.Text, placeholder: "Enter Technologies Used Seperated by ','", id : id + "_techs"});
			var inp2 = new sap.m.TextArea({placeholder: "Description", id : id + "_description"});
			formElement.addField(inp);
			formElement1.addField(inp1);
			formElement2.addField(inp2);
			formContainer.addFormElement(formElement);
			formContainer.addFormElement(formElement1);
			formContainer.addFormElement(formElement2);
			inp.attachChange(this.onProjChange);
			inp1.attachChange(this.onProjChange);
			inp2.attachChange(this.onProjChange);
			this.byId("Projects").addFormContainer(formContainer);
		},
		onClick: function(oEvent){
		},
		onEduChange: function(oEvent){
			var params = oEvent.getParameters();
			console.log(ResumeData);
			var val = params.newValue;
			var list = params.id.split("_");
			ResumeData.education[list[0]][list[1]] = val;
			console.log(ResumeData);
		},
		onExpChange: function(oEvent){
			var params = oEvent.getParameters();
			console.log(ResumeData);
			var val = params.newValue;
			var list = params.id.split("_");
			ResumeData.experience[list[0]][list[1]] = val;
			console.log(ResumeData);
		},
		onSkillChange: function(oEvent){
			var params = oEvent.getParameters();
			console.log(ResumeData);
			var val = params.newValue;
			var id = params.id;
			ResumeData.skills[id] = val;
			console.log(ResumeData);
		},
		onProjChange: function(oEvent){
			var params = oEvent.getParameters();
			console.log(ResumeData);
			var val = params.newValue;
			var list = params.id.split("_");
			ResumeData.projects[list[0]][list[1]] = val;
			console.log(ResumeData);
		},
		onPersonalChange: function(oEvent){
			var params = oEvent.getParameters();
			console.log(ResumeData);
			var val = params.newValue;
			var id = params.id.split("--")[1];
			ResumeData.personal[id] = val;
			console.log(ResumeData);
		}
	});
});