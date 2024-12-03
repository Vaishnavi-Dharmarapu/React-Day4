function eligible(age){
    try{
        if (age>16){
            return "Not eligible for any license";

        }else if (age>=16 && age<=17){
            throw "Eligible for gearless license";
        }else if (age>=18){
            return "eligible for normal license";
        }
    } catch (error){
        return error;
    }

    }
    const age ="enter age";
    alert(eligible(age));
