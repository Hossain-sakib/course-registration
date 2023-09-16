import PropTypes from 'prop-types';
const Course = ({ course }) => {
    const { title } = course;
    return (
        <div>
            <li className="list-disc text-base text-slate-500 font-light">{title}</li>
        </div>
    );
};
Course.propTypes = {
    course: PropTypes.object.isRequired
}

export default Course;