
export interface IFriends {
    name: string,
    message: string,
    image: string[]
}
export const listFriends: IFriends[] = [
    {
        name: 'Kirill Starodubtsev',
        message: 'Hello bro how are you',
        image: ['img/kirill.png']
    },    
    {
        name: 'Elvira Straihet',
        message: 'I am waiting you',
        image: ['img/elvira.png']
    },    
    {
        name: 'Darth Vader',
        message: 'Where is Han Solo?',
        image: ['img/darth_vader.jpg']
    },    
    {
        name: 'Rick Sanchez',
        message: 'I\'m busy now, I\'m on another planet with morty',
        image: ['img/rick_sanchez.png']
    },    
    {
        name: 'Tom Cruise',
        message: 'Mission Impossible Soon 8. NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO',
        image: ['img/tom_cruise.png']
    }

];