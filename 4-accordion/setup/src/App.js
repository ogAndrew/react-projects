import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  // return (
  //   <main>
  //     <div className="container">
  //       <h3>questions and answers about login</h3>
  //       <section className="info">
  //         {questions.map(question => {
  //           return <SingleQuestion key={question.id} {...question} />;
  //         })}
  //       </section>
  //     </div>
  //   </main>
  // )
  return (
    <main>
      <div className="container">
        <h3>Questions</h3>
        <section className="info">
          {data.map( q => {
            return <SingleQuestion key={q.id} {...q} />
          })}
        </section>
      </div>
    </main>
  )
}

export default App;
