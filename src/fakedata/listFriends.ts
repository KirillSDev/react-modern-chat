
export interface IFriends {
    id: number,
    name: string,
    message: string,
    image: string[]
}
export const listFriends: IFriends[] = [
    {   id: 1,
        name: 'Kirill Starodubtsev',
        message: 'Hello bro how are you',
        image: ['img/kirill.png']
    },    
    {   id: 2,
        name: 'Elvira Straihet',
        message: 'I am waiting you',
        image: ['img/elvira.png']
    },    
    {   id: 3,
        name: 'Darth Vader',
        message: 'Where is Han Solo?',
        image: ['img/darth_vader.jpg']
    },    
    {   id: 4,
        name: 'Rick Sanchez',
        message: 'I\'m busy now, I\'m on another planet with morty',
        image: ['img/rick_sanchez.png']
    },    
    {   id: 5,
        name: 'Tom Cruise',
        message: 'Mission Impossible Soon 8. NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO',
        image: ['img/tom_cruise.png']
    }

];