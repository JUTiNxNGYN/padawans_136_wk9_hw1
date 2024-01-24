export default function Content ({ content }) {
    
    return (
        <p>
            <b>{content.model}</b><br />
            {content.make}
        </p>
    )
}