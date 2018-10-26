define(["jquery"],function($){
	function Header(){
		this.load()
	}

	Header.prototype={
		constructor:Header,
		load:function(){

			// 头部
			// $.get("/html/include/header.html", this.headerHandler.bind(this));
			$.get("/html/include/header.html", $.proxy(this.headerHandler, this));

		
		},
		headerHandler:function(data){
			// 将读取到的头部复用HTML渲染到 <header> 内部
			$("header").html(data);
			console.log("a")
		}

	}

	new Header();
})