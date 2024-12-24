const person = {
  name: 'Nguyen Van A',
  age: 25,
  address: {
      city: 'Ha Noi',
      country: 'Vietnam'
  }
}

function ObjectPage() {
  /** 1.1. Sử dụng spread operator để sao chép object person thành personCopy. */
  const personCopy = { ...person };
  console.log(personCopy);

  /** 1.2. Thay đổi thuộc tính name thành 'Tran Van B' và city thành 'Ho Chi Minh' trong object mới. */
  const personCopySecond = {
    ...person,
    name: 'Tran Van B', // Thay đổi name
    address: {
      ...person.address,
      city: 'Ho Chi Minh' // Thay đổi city trong address
    }
  };
  console.log(personCopySecond);

  /** 2. Cho 3 object sau:
  Gộp các object lại thành một object mới. Nếu key trùng nhau, giá trị cuối cùng sẽ được giữ lại.
  kết quả mong đợi: 
  newObj = {
      a: 1,
      b: 3,
      c: 4,
      d: 5,
      e: 6
  } */
  const obj1 = { a: 1, b: 2 };
  const obj2 = { b: 3, c: 4 };
  const obj3 = { d: 5, e: 6 };
  const newObj = { ...obj1, ...obj2, ...obj3 };

  console.log(newObj);

  /** 3. Thêm thuộc tính country: 'USA' vào object address bằng cách sử dụng spread operator (Đảm bảo không làm thay đổi object gốc). */
  const user = {
    id: 1,
    name: 'John Doe',
    address: {
      city: 'New York',
      zip: '10001'
    }
  };

  const updatedUser = {
    ...user,
    address: {
      ...user.address,
      country: 'USA'
    }
  };
  console.log(updatedUser);

  /** Sử dụng spread operator để tạo một object mới và giữ nguyên object gốc:
   * 4.1. Cập nhật brand thành 'Apple'.
    4.2. Giảm giá trị available trong stock xuống còn 25
   */
  const product = {
    id: 101,
    name: 'Laptop',
    details: {
        brand: 'Dell',
        price: 1200,
        stock: {
            available: 30,
            sold: 70
        }
    }
  };

  const productCopy = { ...product };
  const productUpdated = {
    ...product,
    details: {
      ...product.details,
      brand: 'Apple', // update brand
      stock: {
          ...product.details.stock,
          available: 25 // update available
      }
    }
  };

  console.log(productCopy);
  console.log(productUpdated);

  /** 5.Viết hàm removeEngineType để xóa thuộc tính type trong object engine. Hàm trả về một object mới mà không làm thay đổi object ban đầu. */
  const car = {
    brand: 'Toyota',
    model: 'Camry',
    engine: {
        type: 'V6',
        horsepower: 300
    }
  };

  const removeEngineType = (car: { brand: string; model: string; engine: { type: string; horsepower: number } }) => {
    // Sao chép object car, bỏ qua thuộc tính type trong engine
    const newCar = {
        ...car,
        engine: {
          ...car.engine,
          type: undefined // Xóa thuộc tính 'type'
        }
    };

    return newCar;
  }
  const updatedCar = removeEngineType(car);
  console.log(car);
  console.log(updatedCar);

  /** 6. Viết hàm flattenObject để chuyển object lồng nhau thành object phẳng (Flatten object). */
  const nestedObject = {
    a: 1,
    b: { c: 2, d: { e: 3 } }
  };

  return (
    <h2>Hello</h2>
  )
}

export default ObjectPage;