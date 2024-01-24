function main() {
    let releaseDateFrom = new Date();

    let ninetyDaysAgo = new Date(releaseDateFrom);
    ninetyDaysAgo.setDate(releaseDateFrom.getDate() - 90);
    
    let releaseDateFromFormatted = releaseDateFrom.toISOString().split('T')[0];
    let ninetyDaysAgoFormatted = ninetyDaysAgo.toISOString().split('T')[0];
    
    document.getElementById("rdf").setAttribute("min", ninetyDaysAgoFormatted);
    document.getElementById("rdf").setAttribute("max", releaseDateFromFormatted);

    let releaseDateTo = new Date();

    let ninetyDays = new Date(releaseDateTo);
    ninetyDays.setDate(releaseDateFrom.getDate() - 90);
    
    let releaseDateToFormatted = releaseDateTo.toISOString().split('T')[0];
    let ninetyDaysFormatted = ninetyDays.toISOString().split('T')[0];
    
    document.getElementById("rdt").setAttribute("min", ninetyDaysFormatted);
    document.getElementById("rdt").setAttribute("max", releaseDateToFormatted);

    let experationDateFrom = new Date();

    let ninety = new Date(experationDateFrom);
    ninety.setDate(experationDateFrom.getDate() - 90);
    
    let experationDateFromFormatted = experationDateFrom.toISOString().split('T')[0];
    let ninetyFormatted = ninety.toISOString().split('T')[0];
    
    document.getElementById("edf").setAttribute("min", ninetyFormatted);
    document.getElementById("edf").setAttribute("max", experationDateFromFormatted);

    let experationDateTo = new Date();

    let ninetyDayss = new Date(experationDateTo);
    ninetyDayss.setDate(experationDateTo.getDate() - 90);
    
    let experationDateToFormatted = experationDateTo.toISOString().split('T')[0];
    let ninetyDayssFormatted = ninetyDayss.toISOString().split('T')[0];

    document.getElementById("edt").setAttribute("min", ninetyDayssFormatted);
    document.getElementById("edt").setAttribute("max", experationDateToFormatted);

    let destructionDateFrom = new Date();

    let daysAgo = new Date(destructionDateFrom);
    daysAgo.setDate(destructionDateFrom.getDate() - 90);
    
    let destructionDateFromFormatted = destructionDateFrom.toISOString().split('T')[0];
    let daysAgoFormatted = daysAgo.toISOString().split('T')[0];
    document.getElementById("ddf").setAttribute("min", daysAgoFormatted);
    document.getElementById("ddf").setAttribute("max", destructionDateFromFormatted);

    let destructionDateTo = new Date();

    let ninetyDayssAgo = new Date(destructionDateTo);
    ninetyDayssAgo.setDate(destructionDateFrom.getDate() - 90);
    
    let destructionDateToFormatted = destructionDateTo.toISOString().split('T')[0];
    let ninetyDayssAgoFormatted = ninetyDayssAgo.toISOString().split('T')[0];
    document.getElementById("ddt").setAttribute("min", ninetyDayssAgoFormatted);
    document.getElementById("ddt").setAttribute("max", destructionDateToFormatted);

    let arrivalDateFrom = new Date();

    let dayssAgo = new Date(arrivalDateFrom);
    dayssAgo.setDate(arrivalDateFrom.getDate() - 90);
    
    let arrivalDateFromFormatted = arrivalDateFrom.toISOString().split('T')[0];
    let dayssAgoFormatted = dayssAgo.toISOString().split('T')[0];
    document.getElementById("adf").setAttribute("min", dayssAgoFormatted);
    document.getElementById("adf").setAttribute("max", arrivalDateFromFormatted);

    let arrivalDateTo = new Date();

    let ninetydayssAgo = new Date(arrivalDateTo);
    ninetydayssAgo.setDate(arrivalDateTo.getDate() - 90);
    
    let arrivalDateToFormatted = arrivalDateTo.toISOString().split('T')[0];
    let ninetydayssAgoFormatted = ninetydayssAgo.toISOString().split('T')[0];
    document.getElementById("adt").setAttribute("min", ninetydayssAgoFormatted);
    document.getElementById("adt").setAttribute("max", arrivalDateToFormatted);


    /*let currentDate = new Date();
    let threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
    
    let inputDate = new Date(document.getElementById("rdf").value);

    document.getElementById("rdf").min = "threeMonthsAgo";

    if(inputDate >= threeMonthsAgo && inputDate<=currentDate) {
        alert("Date is valid");
    }
    else{
        alert("Date is invalid");
    }*/
}