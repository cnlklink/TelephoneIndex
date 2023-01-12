import TelephoneIndex, { TelephoneIndexEntry, SearchResults } from './TelephoneIndex'

class ArrayBasedTelephoneIndex implements TelephoneIndex
{
  fillWithTestData(): void
  {
    this.createEntryWithFirstLast( "Adam", "Apple" )
    this.createEntryWithFirstLast( "Bob", "Brown" )
    this.createEntryWithFirstLast( "Billy", "Blueberry" )
  }

  fillWithNRandomEntries( n: number ): void 
  {
    for( let i = 0; i < n; i++ )
    {
      this.createEntryWithFirstLast( this._pickARandomFirstName(), this._pickARandomLastName() )
    }
  }
  
  createEntryWithFirstLast( firstName: string, lastName: string ): TelephoneIndexEntry 
  {
    let newEntry = {
      name: lastName + ", " + firstName 
    }

    this._entries.push( newEntry )

    return newEntry
  }

  _pickARandomLastName(): string 
  {
    let randomIndex = Math.floor(Math.random() * this._poolOfLastNames.length)
    return this._poolOfLastNames[randomIndex]
  }

  _pickARandomFirstName(): string 
  {
    let randomIndex = Math.floor(Math.random() * this._poolOfFirstNames.length)
    return this._poolOfFirstNames[randomIndex]
  }

  getNumberOfEntries(): number 
  {
    return this._entries.length
  }

  searchByQuickIndexItem( item: string ): SearchResults
  {
    let filterByFirstLetterInLastName = new RegExp( `^[${item}]`, "i" )
    let resultEntries = this._entries.filter( ( entry: TelephoneIndexEntry ) => { 
      return entry.name.match( filterByFirstLetterInLastName )
    } )

    return { 
      entries: resultEntries,
      count: resultEntries.length 
    }
  }

  _entries: Array<TelephoneIndexEntry> = []

  _poolOfLastNames: Array<string> = [
    'Adams', 'Anderson', 'Ashton', 'Atkins', 'Avery',
    'Baker', 'Banks', 'Barnes', 'Bell', 'Bennett',
    'Carter', 'Castle', 'Chapman', 'Clarke', 'Cooper',
    'Davis', 'Dawson', 'Dixon', 'Douglas', 'Duncan',
    'Elliott', 'Ellis', 'Evans', 'Everett', 'Edwards',
    'Fisher', 'Fleming', 'Foster', 'Fowler', 'Fox',
    'Gibson', 'Gilbert', 'Gill', 'Glover', 'Graham',
    'Hamilton', 'Harding', 'Harper', 'Harris', 'Harrison',
    'Isaac', 'Ingram', 'Irwin', 'Jack', 'Jenkins',
    'Keith', 'Keller', 'Kelley', 'Kelly', 'Kendall',
    'Lindsey', 'Little', 'Livingston', 'Lloyd', 'Logan',
    'Mann', 'Marshall', 'Martin', 'Mason', 'Matthews',
    'Nelson', 'Newman', 'Newton', 'Nguyen', 'Nichols',
    'Obrien', 'Ochoa', 'Oliver', 'Olsen', 'Ortega',
    'Palmer', 'Parker', 'Parks', 'Patton', 'Paul',
    'Quinn', 'Quintero', 'Quinn', 'Quinn', 'Quinn',
    'Ramirez', 'Ramos', 'Ramsey', 'Ray', 'Reed',
    'Sandoval', 'Santiago', 'Santos', 'Sargent', 'Saunders',
    'Tate', 'Taylor', 'Terrell', 'Thomas', 'Thompson',
    'Underwood', 'Valdez', 'Valencia', 'Vance', 'Vang',
    'Wagner', 'Walker', 'Wallace', 'Walters', 'Ward',
    'Xiong', 'Xu', 'Xie', 'Xiang', 'Xiao',
    'Young', 'Yates', 'York', 'Yoder', 'Yoon',
    'Zamora', 'Zimmerman', 'Zuniga', 'Zimmerman', 'Zimmerman'
  ];

  _poolOfFirstNames: Array<string> = [
    'Adam', 'Aiden', 'Alex', 'Andrew', 'Archie',
    'Benjamin', 'Bradley', 'Brett', 'Brian', 'Brock',
    'Cameron', 'Carl', 'Chase', 'Chris', 'Clayton',
    'Daniel', 'David', 'Derek', 'Drew', 'Dustin',
    'Edward', 'Eli', 'Elias', 'Ethan', 'Evan',
    'Frank', 'Fred', 'Finn', 'Gabriel', 'Gage',
    'Harvey', 'Henry', 'Hunter', 'Ian', 'Isaac',
    'Jack', 'Jackson', 'Jacob', 'Jaden', 'James',
    'Kaden', 'Kai', 'Keaton', 'Keith', 'Kevin',
    'Landon', 'Lincoln', 'Logan', 'Luke', 'Lyle',
    'Mackenzie', 'Mason', 'Matthew', 'Max', 'Michael',
    'Nathan', 'Nathaniel', 'Neil', 'Nicholas', 'Noah',
    'Oliver', 'Owen', 'Parker', 'Patrick', 'Paul',
    'Quincy', 'Quinn', 'Quintin', 'Quincy', 'Quinn',
    'Ryan', 'Richard', 'Riley', 'Robert', 'Rhett',
    'Scott', 'Sean', 'Seth', 'Shawn', 'Simon',
    'Taylor', 'Thomas', 'Trevor', 'Tyson', 'Ty',
    'Victor', 'Vincent', 'Vaughn', 'Vance', 'Valentine',
    'William', 'Wyatt', 'Weston', 'Wesley', 'Wilbur',
    'Xander', 'Xander', 'Xander', 'Xander', 'Xander',
    'Yves', 'Yves', 'Yves', 'Yves', 'Yves',
    'Zachary', 'Zackery', 'Zander', 'Zane', 'Zion'
  ]
  
}

export default ArrayBasedTelephoneIndex 
