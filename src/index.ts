// クラスの基本的な例
class Person {
  // プロパティ
  private name: string;
  private age: number;

  // コンストラクタ
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // メソッド
  public introduce(): void {
    console.log(`私の名前は${this.name}です。${this.age}歳です。`);
  }
}

// クラスのインスタンス化
const person = new Person("田中", 25);
person.introduce(); 