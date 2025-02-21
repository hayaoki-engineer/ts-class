class Department {
  // プロパティ
  name: string;

  // コンストラクタ
  constructor(n: string) {
    this.name = n;
  }

  // メソッド
  describe() {
    console.log('Department: ' + this.name);
  }

}

// インスタンス化
const accounting = new Department('Accounting');

// メソッドを呼び出す
accounting.describe();
