import Realm from "realm";

class Book extends Realm.Object {}

Book.schema = {
    name:'Book',
    properties:{
        recordID:'string',
        title:'string',
        auther:'string',
        details:'string'
    },
    primaryKey:'recordID',
}

let realm = new Realm({schema:[Book],schemaVersion:4})

let getAllBooks = () =>{
    return realm.objects("Book")
}

let addBook = (_recordID,_title,_auther,_details) =>{
    realm.write(()=>{
        const book = realm.create("Book",{
            recordID:_recordID,
            title:_title,
            auther:_auther,
            details:_details,
        })
    })
}

let deleteAllBooks = () =>{
    realm.write(()=>{
        realm.deleteAll()
    })
}

export default realm;

export {
    getAllBooks,addBook,deleteAllBooks,
}