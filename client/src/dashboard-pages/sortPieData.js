function sortPieData(data){

    function findLabels(array) {
        var labelsArray = [];
        labelsArray.push(array[0]);
        for(var j=0; j<array.length; j++){
            if(j>0){
                if(array[j] != array[j-1]){
                    labelsArray.push(array[j]);
                }
            }
        }
        return labelsArray;
    }

    function findHits(labelsArray, array){
        var hits = [0];
        var hitsIndex = 0;
        for(var k=0; k<labelsArray.length; k++){
            for(var l=0; l<array.length; l++){
                if(array[l] == labelsArray[k]){
                    hits[hitsIndex]++;
                }
            }
            hitsIndex++;
            hits.push(0)
        }
        hits.pop()
        return hits;
    }

    var pumpNameArray = [];
    for(var i=0; i<data.length; i++){
        pumpNameArray[i] = data[i].iwp_pump_id_fk
    }

    function generateColors(dataArray){
        var colors = []
        for(var i=0; i<dataArray.length; i++){
            if(i % 2){
                colors.push('rgb(181, 181, 181)');
            } else {
                colors.push('rgb(71, 61, 255)');
            }
        }
        return colors;
    }

    const returnData = {
        labels: findLabels(pumpNameArray),
        datasets: [
            {
                label: "Last 25 transmissions by pump ID",
                data: findHits(findLabels(pumpNameArray), pumpNameArray),
                backgroundColor: generateColors(findLabels(pumpNameArray)),
                hoverOffset: 4
            },
        ],
    };
    return returnData;
}
export default sortPieData;