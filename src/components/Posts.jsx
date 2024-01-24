
import Content from "./Post"

export const Contents = () => {

    const contents = [
        {
            'Year' : '2024',
            'Make' : 'Toyota',
            'Model' : 'Tundra',
            'Trim' : 'TRD Pro',
            'Color' : 'Terra',
            'user_id' : '1'
        },
        {
            'Year' : '2018',
            'Make' : 'Nissan',
            'Model' : 'GTR',
            'Trim' : 'Nismo',
            'Color' : 'Cloud White',
            'user_id' : '2'
        },
        {
            'Year' : '2023',
            'Make' : 'Porsche',
            'Model' : 'Taycan',
            'Trim' : 'GTS Sport Turismo',
            'Color' : 'Chalk',
            'user_id' : '1'        
        }
    ]

    return (
        <>
            {contents.length > 0 ? contents.map((content) => {
                return <Post key={content.id} content={content} />
            }) : <p>No Posts to Display</p>}
        </>
    )
}