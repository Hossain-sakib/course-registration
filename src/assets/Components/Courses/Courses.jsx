const Courses = ({courses}) => {
    const {title} = courses;
    return (
        <div>
            <p>Credit Hour Remaining {} hr</p>
            <hr />
            <h3>Course Name</h3>
                <ol>
                    <li>{title}</li>
                </ol>
            <hr />
            <p>Total Credit Hour:{}</p>
            <hr />
            <p>Total Price: {}</p>
        </div>
    );
};

export default Courses;