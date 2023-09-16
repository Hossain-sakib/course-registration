import PropTypes from 'prop-types';
import Course from "../Course/Course";

const Courses = ({ courses, remainingCredits, totalCredits, totalPrice }) => {
    return (
        <div className="h-1/3 w-1/2 md:1/3 lg:w-1/4 bg-white rounded-2xl shadow-xl px-3 py-3 space-y-4">
            <p className="text-left text-xl text-blue-500 font-bold">Credit Hour Remaining {remainingCredits} hr</p>
            <hr />
            <h3 className="text-left text-2xl font-bold">Course Name</h3>
            {
                courses.map(course => <Course
                    key={course.id}
                    course={course}></Course>)
            }
            <hr />
            <p className="text-left text-base text-slate-600 font-semibold">Total Credit Hour: {totalCredits}</p>
            <hr />
            <p className="text-left text-base text-slate-600 font-bold">Total Price: {totalPrice} USD</p>
        </div>
    );
};
Courses.propTypes = {
    courses: PropTypes.array.isRequired,
    remainingCredits: PropTypes.number.isRequired,
    totalCredits: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired

}

export default Courses;