/* Various Functions used throughout the app for different functionalities.*/

const ParseUsernametoInt = (username) => {
    /* We want to create Ints for usernames that are consitent numerical values.
    They are used solely for giving each user a consistent photo ID color*/
    const LETTERTABLE = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,0:0};
    username = username.toLowerCase();
    let sum = 0;
    for (let i = 0; i < username.length; i++) {
        if (LETTERTABLE[username.charAt(i)]){
            sum += LETTERTABLE[username.charAt(i)];
        }
    }
    return sum;
}

const UserPhotoSelect = (intNum) => {
    // User Photo Selection, takes the int from ParseUsernameToInt and returns an index corresponding to their user photo.
    console.log(intNum)
    let numMod = intNum % 5;
    console.log(numMod)
    return numMod;
}

const timeCalculator = (timeCreated) => {
    /*Translating our time value into something viewer readable*/
    let timeDelta = Date.now() - timeCreated;
    const ONE_DAY_IN_THOUSANDTHS_SECOND = 24 * 60 * 60 * 1000; // 1 day in 1000s of a second (The format date is given in)
    const ONE_HOUR_IN_THOUSANDTHS_SECOND = 60 * 60 * 1000; // 1 hour in 1000s of a second (The format date is given in)
    if (timeDelta >= ONE_DAY_IN_THOUSANDTHS_SECOND) {
        let roundedTimeDelta = Math.floor(timeDelta / ONE_DAY_IN_THOUSANDTHS_SECOND)
        if (roundedTimeDelta == 1){
            return `${roundedTimeDelta} day ago`
        } else {
            return `${roundedTimeDelta} days ago`
        }
    }
    else if (timeDelta <= ONE_HOUR_IN_THOUSANDTHS_SECOND) { 
        return "<1 Hour Ago"
    }
    else {
        let roundedTimeDelta = Math.floor(timeDelta / ONE_HOUR_IN_THOUSANDTHS_SECOND)
        if (roundedTimeDelta == 1){
            return `${roundedTimeDelta} hour ago`
        } else {
            return `${roundedTimeDelta} hours ago`
        }
    }
}

const longDateTimeString = (createdAt) => {
    /* This function gives long date strings for when hovering the X time ago element*/
    let dateCreatedAt = new Date(parseInt(createdAt));
    const options = { timeZone:"America/New_York", dateStyle:"full",timeStyle:"long" };
    return dateCreatedAt.toLocaleString('en-US', options);
}

export { timeCalculator, ParseUsernametoInt, UserPhotoSelect, longDateTimeString };