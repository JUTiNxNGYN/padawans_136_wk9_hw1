export default function Post ({ post }) {
    
    return (
        <p>
            <b>{post.car.make}</b><br />
            {post.car.model}
            {post.car.trim}
        </p>
    )
}