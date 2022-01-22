$(function(){
	this.execute = function(){
		
	}

/*	
	$("#itemHome").click(function(){
		$(".contents").hide();

	});
*/

	$("#iphoneClick").click(function(){
		$(".contents").show();
		$(".contents").empty();
		$.ajax({
			  url: "JSON/phone.json",
			  cache: false,
			  success: function(result){
				$.each(result.iphoneData.mobiles, function(index, value){
					$(".contents").append(  "<div style='display:-webkit-inline-box; text-align: center; padding:10px;'><br /><img src='"+value.imgURL+"' class='ContentImages'/><br /> <label class='itemLabel'>" +value.ItemName+ "<br />&#8377;" +value.Price+
								"</label><br /><button class='BasketBtn' onclick='add(\""+value.ItemName+"\",\""+value.imgURL+"\","+value.Price+")'>Add to Basket</button></div>");
			});
			},
			
			error: function(err){
			  console.log(err)
			}
	
			});
	});
	
	$("#samsungClick").click(function(){
		$(".contents").show();
		$(".contents").empty();
		$.ajax({
		  url: "JSON/phone.json",
		  cache: false,
		  success: function( result ){ 
			$.each(result.samsungData.mobiles, function(index, value){
			$(".contents").append(  "<div style='display:-webkit-inline-box; text-align: center; padding:10px;'><br /><img src='"+value.imgURL+"' class='ContentImages'/><br /> <label class='itemLabel'>" +value.ItemName+ "<br />&#8377;" +value.Price+
								"</label><br /><button class='BasketBtn' onclick='add(\""+value.ItemName+"\",\""+value.imgURL+"\","+value.Price+")'>Add to Basket</button></div>");
			});
		  },
		  error: function(err){
			  console.log(err)
		  }
		});
	});
	
	$("#lenovoClick").click(function(){
		$(".contents").show();
		$(".contents").empty();
		$.ajax({
		  url: "JSON/phone.json",
		  cache: false,
		  success: function( result ){ 
			$.each( result.lenovoData.mobiles, function(index, value ){
				$(".contents").append(  "<div style='display:-webkit-inline-box; text-align: center; padding:10px;'><br /><img src='"+value.imgURL+"' class='ContentImages'/><br /> <label class='itemLabel'>" +value.ItemName+ "<br />&#8377;" +value.Price+
								"</label><br /><button class='BasketBtn' onclick='add(\""+value.ItemName+"\",\""+value.imgURL+"\","+value.Price+")'>Add to Basket</button></div>");
			});
		  },
		  error: function(err){
			  console.log(err)
		  }
		});
	});
	
	$("#motoClick").click(function(){
		$(".contents").show();
		$(".contents").empty();
		$.ajax({
		  url: "JSON/phone.json",
		  cache: false,
		  success: function( result ){ 
			$.each( result.motoData.mobiles, function(index, value ){
				$(".contents").append( "<div style='display:-webkit-inline-box; text-align: center; padding:10px;'><br /><img src='"+value.imgURL+"' class='ContentImages'/><br /> <label class='itemLabel'>" +value.ItemName+ "<br />&#8377;" +value.Price+
								"</label><br /><button class='BasketBtn' onclick='add(\""+value.ItemName+"\",\""+value.imgURL+"\","+value.Price+")'>Add to Basket</button></div>");
			});
		  },
		  error: function(err){
			  console.log(err)
		  }
		});
	});
	
});