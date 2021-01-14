import { firebaseApp } from "./firebase";

export const studentsCollection = () => {
  return firebaseApp.firestore().collection("students");
};

export const updateStudentFirestore = async (studentId, name, age) => {
  await studentsCollection()
    .doc(studentId)
    .update({
      name: name,
      age: age,
    })
    .then(function () {
      console.log("Document successfully written!");
    })
    .catch(function (error) {
      console.error("Error writing document: ", error);
    });
};
