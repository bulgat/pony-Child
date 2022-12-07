const ground0 =[0,1,0,2,1,0,1,3,2,1,2,1]

function CountRain(Ground){
	let maxLeft=Ground[0];
	let maxRight=Ground[Ground.length-1];
	
	let left =1;
	let right=Ground.length-2;
	let total =0;
	
	let groundWater =[0];
	
	while(left<=right){
		
		if(maxLeft<=maxRight){
			groundWater[left] = 0;
			if(maxLeft-Ground[left]>0){
				total +=maxLeft-Ground[left];
				groundWater[left] = maxLeft-Ground[left];
			} 
			maxLeft = Math.max(maxLeft,Ground[left]);
			
			left+=1;
			
		}
		else 
		{
			groundWater[right] = 0;
			if(maxLeft-Ground[right]>0){
				total +=maxRight-Ground[right];
				groundWater[right] = maxRight-Ground[right];
			}
			maxRight = Math.max(maxRight,Ground[right]);
			//groundWater[right] = total;
			right-=1;
		}
	}
	console.log("=======Ground",Ground)
	console.log("==groundWater",groundWater)
	DrawGround(Ground,groundWater);
}
function DrawGround(Ground,GroundWater){
	const canvas = document.getElementById("ground");

    const ctx = canvas.getContext("2d");
	console.log("Ground",Ground)
	for(let i=0;i<Ground.length;i++){
		for(var z=0;z<Ground[i];z++){
			ctx.fillStyle = "orange";
			ctx.fillRect(25*i, 25*(3-z), 24, 24);
		}
	}
	for(let i=0;i<GroundWater.length;i++){
		//let z = 3;
		for(var z=0;z<GroundWater[i];z++){
			z +=Ground[i];
			if(GroundWater[i]>0){
				ctx.fillStyle = "blue";
				ctx.fillRect(25*i, 25*(3-z), 24, 24);
			}
		}
	}
    
}
CountRain(ground0);