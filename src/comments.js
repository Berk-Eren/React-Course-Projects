function getComments() {
    const comments = [
        {id: 1, text: "Comment one"},
        {id: 2, text: "Comment two"},
        {id: 3, text: "Comment three"}
    ];

    return (
        <>
            <div className="comments">
                <ul>
                    {comments.map((comment, index)=>(
                        <li key={index}>{comment.text}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}


export default getComments