// import { firestore } from './index';

// const dataRef = firestore
//   .collection('some-collection')
//   .doc('some-doc');

// export const createData = async dataToAdd => {
//   await dataRef
//     .set({ dataToAdd }, { merge: true })
//     .then(() => console.info(`${dataToAdd} added`))
//     .catch(error => console.info(error));
// };

// export const readData = async () => await dataRef.get();

// export const updateData = async newData => {
//   await dataRef
//     .update({ newData })
//     .then(() => console.info(`${newData} updated`))
//     .catch(error => console.error(error));
// };

// export const deleteData = async () => {
//   await dataRef
//     .delete()
//     .then(() => console.info(`Data deleted!`))
//     .catch(error => console.error(error));
// };
