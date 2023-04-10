main();

function minTime(packages){
   
    let totalTime = 0;
    let maxPackages = Math.max(...packages);
    let positionMaxPackages = packages.indexOf(maxPackages);
    let packagesToRetrieve = 0;
    let timeMove = 0;
    let moves = 0;
    //console.log(maxPackages)
    //console.log(positionMaxPackages)
    //console.log(packages.length)

    // Calculate the time to retrieve all packages from each bin

    for (let i = 0; i < packages.length; i++) {
        
        packagesToRetrieve += packages[i]; // Load and unload 
        totalTime = packagesToRetrieve; // all packages

    }
    console.log(totalTime)
    // Calulate the time to move to the bin and back
    
    buclebin: for (i = 0; i <= positionMaxPackages;i++) {

        if (packages[i] <= packages[i-1]) {
            continue buclebin
        }

        if (i === positionMaxPackages) {
            // console.log(timeMove)
            timeMove += (packages.length - positionMaxPackages) * (maxPackages - moves)
            // console.log(timeMove)
            // console.log(totalTime)
            // console.log(moves)
            break buclebin
        }
        if (packages[i] > packages[i - 1]) {
            timeMove += (packages[i] - packages[i - 1]) * (packages.length - packages.indexOf(packages[i]))
            moves = packages [i]  
            // console.log(timeMove)
            continue  
        }

        timeMove = packages[i] * packages.length 
        moves = packages [i] 
        // console.log(timeMove)
        // console.log(moves)
    }
    console.log(timeMove)
    totalTime += timeMove
    return totalTime
}
               

    
        
    

function main(){

    let packages = [7, 4, 7];
    let result = minTime(packages);
    console.log(result);
}

