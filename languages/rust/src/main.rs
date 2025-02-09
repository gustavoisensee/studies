use std::io;

fn greet(name: &str) {
  let age = 36;

  println!("Name: {}, Age: {}", name, age);
}

fn main() {
  greet("Gustavo");

  let mut guess = String::new();

  println!("Please input your name");

  io::stdin().read_line(&mut guess)
    .expect("Failed to read line");

  println!("You're name is: {}", guess);
}