import React, { useState } from 'react'
import './App.css'
const datas = [
  {
    "id": 15,
    "title": "HTML CSS Pro",
    "slug": "htmlcss",
    "description": "Khóa học HTML CSS Pro phù hợp cho cả người mới bắt đầu, lên tới 8 dự án trên Figma, 300+ bài tập và flashcards, tặng 3+ games, tặng 20+ Figma để thực hành, cộng đồng học viên Pro nhiệt tình hỗ trợ nhau, mua một lần học mãi mãi.",
    "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png",
    "icon_url": "https://files.fullstack.edu.vn/f8-prod/courses/15/62385d6c63dfa.png",
    "price": 1299000,
    "old_price": 2500000,
    "is_pro": true,
    "is_published": true,
    "students_count": 0,
    "videos_count": 591,
    "duration": 420567,
    "duration_text": "116h49p",
    "user_progress": 13,
    "last_completed_at": "2024-12-14 21:51:11",
    "published_at": "2022-08-18T17:00:00.000000Z"
  },
  {
    "id": 27,
    "title": "Ngôn ngữ Sass",
    "slug": "sass",
    "description": "Đây là một khóa học nhỏ được tách ra từ 2 chương học trong khóa HTML CSS Pro. Kiến thức về Sass trong khóa này bạn có thể áp dụng ngay vào các dự án của bạn.",
    "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/27/64e184ee5d7a2.png",
    "icon_url": "https://files.fullstack.edu.vn/f8-prod/courses/27/64e0daf212fad.png",
    "price": 299000,
    "old_price": 400000,
    "is_pro": true,
    "is_published": true,
    "students_count": 0,
    "videos_count": 27,
    "duration": 22690,
    "duration_text": "6h18p",
    "user_progress": 0,
    "last_completed_at": null,
    "published_at": "2023-08-19T15:06:00.000000Z"
  },
  {
    "id": 19,
    "title": "JavaScript Pro",
    "slug": "javascript",
    "description": "Khóa học JavaScript Pro này là nền tảng vững chắc để học tiếp React, Vue.js, Node.js, v.v. Mục tiêu là giúp bạn có thể làm chủ JavaScript thông qua việc am hiểu cơ chế hoạt động của ngôn ngữ.",
    "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/19/66aa28194b52b.png",
    "icon_url": "https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb685c81.png",
    "price": 1399000,
    "old_price": 3299000,
    "is_pro": true,
    "is_published": true,
    "students_count": 0,
    "videos_count": 169,
    "duration": 110515,
    "duration_text": "30h41p",
    "user_progress": 54,
    "last_completed_at": "2024-11-30 08:06:10",
    "published_at": "2024-08-08T17:00:00.000000Z"
  }
];

function Button({href, text, onClick, className}) {

  let Component = 'button';
  let props = {
    className: `custom-button ${className}`
  };

  if (href) {
    Component = 'a';
    props.href = href;
  }

  if(onClick) {
    props.onClick = onClick;
  }


  return (
    <Component {...props}>{text}</Component>
  );
}

function CourseItem({course, onClick = () => {}}) {

  function handleClick() {
    console.log("Register", course.title);
  }
  return (
    <>
      <h2 onClick={() => onClick(course)}>
        {course.id}-{course.title}
      </h2>
      <img src={course.image_url} alt={course.title}/>
      <p>{course.description}</p>
      <Button text="Register" onClick={handleClick} className="override-button"/>
    </>
  )
}

function Courses({courses}) {
  return (
    <>
      {courses.map(course => <CourseItem key={course.id} course={course}/>)}
    </>
  )
}

function CourseList({courses, children}) {
  return (
    <>
      {/* {courses.map((course, index) => children({course, index}))} */}
      {courses.map((...props) => children(...props))}
    </>
  )
}

function App() {

  function handleClick(course) {
    console.log(course.title);
  }

  //Case1:
  // return (
  //   <>
  //     {
  //       datas.map(course => 
  //         <CourseItem 
  //           key={course.id} 
  //           course={course}
  //           onClick={handleClick}
  //         />
  //       )
  //     }
  //   </>
  // )

  //Case2:
  //return (<Courses courses={datas}/>)

  //Case3:
  return (<CourseList courses={datas}>
    {(course, index) => <CourseItem course={course} key={index}/>}
  </CourseList>)
}

export default App
