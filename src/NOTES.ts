export var NOTES: Note[] = [

    {
        Id: 1, 
        title: "first note", 
        text: "Hello world", 
        isCompleted: false
    }, 
    {
        Id: 2, 
        title: "second note", 
        text: "this is my personal note", 
        isCompleted: false
    }
]



export interface Note {
    Id: number
    title: string, 
    text: string, 
    isCompleted: boolean
} 