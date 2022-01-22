var phones;
var cart =[];
var availableTags=[];
var shopping_cart=(function(){
	var bucket=[];
	function navigate_Home()
	{
		$(".contents").hide();
		$(".leftPanel").show();
	}

	function addItem(item){
		bucket.push(item);
		alert('Item added to the cart.');
		$('#itemSelected').html(bucket.length);
	}

	function removeItem(item){

		$.each(bucket,function(index,value){
			if(value.price === item){
				bucket.splice(index, 1);
				$('#itemSelected').html(bucket.length);
				alert('Item Removed.');
				return false;
			}
		})
	}
	
	function buyItems(item){
		$(".leftPanel").hide();
		$(".contents").show();
		$(".contents").empty();
		
		//$.each(bucket,function(index,value){
			$(".contents").html('<div class="form">'+
				'<h2>Enter Details:</h2>'+
				'<label class="regLabel">Enter Name:</label><input type="text" class="regInput"/><br />'+
				'<label class="regLabel">Mobile Number:</label><input type="number" class="regInput"/><br />'+
				'<label class="regLabel">E-mail:</label><input type="number" class="regInput"/><br />'+
				'<label class="regLabel">Billing Address:</label><textarea rows="4" cols="30"></textarea>'+
				'<label class="regLabel">Shipping Address:</label><textarea rows="4" cols="30"></textarea>'+
				'<input type="button" class="orderButton" value="Order Now">'+
				'</div>');
				

		//});
	}

	function getBucket(){
		return bucket;
	}

	return {
		addItem:addItem,
		removeItem:removeItem,
		getBucket:getBucket,
		buyItems:buyItems,
		navigate_Home:navigate_Home
	}

});
	var obj = new shopping_cart();
  	
  	this.add=function(name,path,price){
	 	obj.addItem({ name:name, path:path, price:price});
	 }

	this.show_cart=function(){
		$(".leftPanel").show();
		$(".contents").show();
		$(".contents").empty();
		if(obj.getBucket().length == 0){
			$( ".contents" ).html("<div class='emptyCart'><h2>Cart is Empty</h2><div>");
		}
		else{
			 $.each(obj.getBucket(), function( index, value ) {	
						 $( ".contents" ).append( "<div style='display:-webkit-inline-box; text-align: center; padding:10px;'><br /><img src='"+value.path+"' class='ContentImages'/><br /><label class='itemLabel'>"
							+value.name+"</label><br /><button class='BasketBtn' onclick='buyProduct("+value.price+")'>Buy Now</button><br /><button class='BasketRemoveBtn' onclick='remove("+value.price+")'>Remove</button><br />");
													
					 });
		}
	}

	this.remove=function(price){
		obj.removeItem(price);
		$(".contents").empty();
		this.show_cart();
	}
	
	this.buyProduct = function(price){
		obj.buyItems(price);
	}

	this.navigateHome = function(){
		obj.navigate_Home();
	}


