// import React from 'react';
import "../assets/People.css"

export const People = () => {
    const PeopleArray = [
        { Name: 'Apurva Chauhan', Country: 'India' },
        { Name: 'Brian M. Disco', Country: 'Canada' },
        { Name: 'James Chris Jhonson', Country: 'Australia' },
        { Name: 'Rahul Kumar Sharma', Country: 'Germany' },
        { Name: 'Prithvi Raj Chauhan', Country: 'India' },
        
      ];
      
      console.log(PeopleArray);
      
  return (
    <div>
        <table className=" custom-table border-separate border border-slate-400 ...">
                
                <tbody>
                    {PeopleArray.map((people, index) => (
                        <tr key={index}>
                            <td className="border border-slate-300 ...">{people.Name}</td>
                            <td className="border border-slate-300 ...">{people.Country}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

    </div>
  )
}
