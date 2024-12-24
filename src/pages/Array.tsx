import { useState } from "react";

type NumbersArray = number[];
function ArrayPage() {
  /** Cho array sau:
  const numbers = [10, 20, 30, 40];
  Viết hàm addToArray(arr, value, position) để thêm phần tử value vào mảng arr tại vị trí position. (Sử dụng toán tử spread để tạo mảng mới) */
  const [numbers, setNumbers] = useState<NumbersArray>([10, 20, 30, 40]);

  // Hàm addToArray
  const addToArray = (arr: NumbersArray, value: number, position: number): NumbersArray => {
    // Nếu vị trí lớn hơn hoặc bằng chiều dài mảng, thêm vào cuối mảng
    if (position >= arr.length) {
      return [...arr, value];
    }

    // Thêm phần tử tại vị trí 'position'
    return [
      ...arr.slice(0, position),  // Mảng con trước vị trí cần chèn
      value,                      // Thêm phần tử value
      ...arr.slice(position)      // Mảng con sau vị trí cần chèn
    ];
  };

  // Hàm để thêm phần tử vào mảng
  const handleAddItem = (value: number, position: number): void => {
    setNumbers(prevNumbers => addToArray(prevNumbers, value, position));
  };

  /** Cho array sau:
  const numbers = [10, 20, 30, 40];
  Viết hàm addToArray(arr, value, position) để thêm phần tử value vào mảng arr tại vị trí position. (Sử dụng toán tử spread để tạo mảng mới) */
  const [evenNumbers, setEvenNumbers] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  // Hàm lọc các số chẵn
  const filterEvenNumbers = (arr: number[]): number[] => {
    return arr.filter(num => num % 2 === 0);
  };

  // Lọc các số chẵn từ mảng numbers
  const newEvenNumbers = filterEvenNumbers(evenNumbers);

  /** const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank'];
  Viết hàm getSubArray(arr, start, end) để trả về một mảng con từ vị trí start đến end (không bao gồm end). (Dùng slice(start, end)) */
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank'];

  const getSubArray = (arr: string[], start: number, end: number): string[] => {
    return arr.slice(start, end);
  }

  console.log(getSubArray(names, 1, 4));

  /** const numbers = [1, 2, 3, 4, 5];
  Viết hàm doubleNumbers(arr) để trả về một mảng mới, mỗi phần tử là giá trị gấp đôi của phần tử tương ứng trong mảng ban đầu. (Dùng map để ánh xạ tới từng phần tử trong mảng) */
  const doubleNumbers = [1, 2, 3, 4, 5];
  const doubles = (arr: number[]) => {
    return arr.map(num => num * 2);
  }

  console.log(doubles(doubleNumbers));

  /** const numbers = [4, 2, 8, 1, 7];
  Viết hàm sortArray(arr, order) để sắp xếp mảng arr theo thứ tự (Dùng sort với hàm so sánh a - b hoặc b - a):
  - Tăng dần nếu order = 'asc'.
  - Giảm dần nếu order = 'desc'. */
  const numbersArr = [4, 2, 8, 1, 7];
  const sortArray = (arr: number[], order: 'asc' | 'desc'): number[] => {
    return arr.sort((a, b) => {
      if (order === 'asc') {
        return a - b;
      } else if (order === 'desc') {
        return b - a;
      } else {
        return 0;
      }
    });
  }

  console.log(sortArray(numbersArr, 'asc'));
  console.log(sortArray(numbersArr, 'desc'));

  /** const numbers = [5, 3, 8, 1, 6, 7];
  Viết hàm getTopElements(arr, n) để trả về n phần tử lớn nhất trong mảng. (Sử dụng sort để sắp xếp mảng giảm dần, sau đó dùng slice để lấy ra các phần tử đầu tiên) */
  const numbersTop = [5, 3, 8, 1, 6, 7];
  const getTopElements = (arr: number[], n: number) => {
    return arr.sort((a, b) => b -a).slice(0, n);
  }

  console.log(getTopElements(numbersTop, 2));
  console.log(getTopElements(numbersTop, 3));

  /** const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  Viết hàm mergeArrays(arr1, arr2) để gộp hai mảng thành một mảng mới. (dùng toán tử spread) */
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];

  const mergeArrays = (arrFirt: number[], arrSecond: number[]) => {
    return [...arrFirt, ...arrSecond];
  }

  console.log(mergeArrays(array1, array2));

  /** const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  Viết hàm groupByOddEven(arr) để phân mảng thành hai nhóm (Dùng filter để phân loại mảng):
  - Odd: Các số lẻ.
  - Even: Các số chẵn.
  kết quả mong đợi:
  newObj = {
      odd: [1, 3, 5, 7, 9],
      even: [2, 4, 6, 8, 10]
  } */
  const numbersFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const groupByOddEven = (arr: number[]) => {
    return 
  }

  return (
    <div>
      <h2>Danh sách Số</h2>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      
      <button onClick={() => handleAddItem(25, 2)}>Thêm 25 vào vị trí 2</button>
      <button onClick={() => handleAddItem(50, 5)}>Thêm 50 vào cuối</button>
      <br/>
      <br/>
      <h2>Danh sách Số Chẵn</h2>
      <ul>
        {newEvenNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  )
}

export default ArrayPage;