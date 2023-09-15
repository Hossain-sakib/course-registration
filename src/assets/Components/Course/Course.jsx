const Course = ({ course }) => {
    const { title } = course;
    return (
        <div>
            <li className="list-disc text-base text-slate-500 font-light">{title}</li>
        </div>
    );
};

export default Course;