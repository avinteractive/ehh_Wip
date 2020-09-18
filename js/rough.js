// let contacts = new Map()
// contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
// contacts.has('Jessie') // true
// contacts.get('Hilary') // undefined
// contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
// contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
// contacts.delete('Raymond') // false
// contacts.delete('Jessie') // true
// console.log(contacts.size) // 1
// map.keys() – returns an iterable for keys,
// map.values() – returns an iterable for values,
// map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of
//map.size() returns the number of keys


function mutate(entity,outputMapRequest,outputType){
    if(!outputMapRequest){var outputMapRequest = new Map();}
    for (key in entity){
        outputMapRequest.set(key,entity[key]);
    }
    return outputMapRequest;
}


var output = mutate(entityKeysReq,"","map");
console.log(output);

// initProcess();
// .then(function(result) {
//   return doSomethingElse(result);
// })
// .then(function(newResult) {
//   return doThirdThing(newResult);
// })
// .then(function(finalResult) {
//   console.log('Got the final result: ' + finalResult);
// })
// .catch(failureCallback);




//iterateEntity(request,"values");
//Call back Could be ..Get/Set/Delete/Update
function iterateCollection(entity, options, callback) {  //{options : entries || Values || keys}
    if (!response) { var response = new Map(); }
    sw = arguments.callee.name;
    console.log(i, sw, entity, getEntityType(entity), entity.nodeType); i++
    console.log(entity.keys());
    if (options === 'keys') {
        for (key of entity.keys()) {
            if (entity[key]) {
                console.log(key);
                response[key] = entity[key];
            }
        }
    } else {
        console.log("objectType UnRegistered", entity);
    }
    return response;
}



//iterateEntity(request,"values");
//Call back Could be ..Get/Set/Delete/Update
function iterateEntity(entity, options, callback) {  //{options : entries || Values || keys}
    if (!response) { var response = {}; }
    sw = arguments.callee.name;
    console.log(i, sw, entity, getEntityType(entity), typeof entity, entity.nodeType, entity.length); i++;

    if (options === 'values') {
        Object.values(entity).forEach(function (value, key) {
            //  console.log(key + ' = ' + value);

            //  response.set(key, value);
            // console.log(response);
        });
    } else if (options === 'keys') {
        Object.keys(entity).forEach(function (value, key) {
            // console.log(key + ' = ' + value);
            //  response.set(key, value);
        });
    } else if (options === 'entries') {
        Object.entries(entity).forEach(function (value, key) {
            console.log(key + ' = ' + value);
            response[key] = key[value];
            //response.set(key, value);

        });
    } else {
        // console.log("objectType UnRegistered",entity);
    }
    console.log("iterating Entity", response);
    return response;
}
