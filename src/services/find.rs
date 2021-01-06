use rand::Rng;


fn draw (row: i32, col: i32) {
    
    let mut rng = rand::thread_rng();
    
    let point_r : i32 = rng.gen_range(1, row);
    let point_c : i32 = rng.gen_range(1, col);
    
    println!("{} - {}", point_r, point_c);
    
    let mess = "🙂";
    let empy = "🙂";
    let loss = "🙃";

    for r in 0..=row {
        for c in 0..=col {
            if r == 0 || r == row {
                print!("{}", mess);
            } else if c == 0 {
                print!("{}", mess);
            } else if c == col {
                print!("{}", mess);
            } else if c == point_c && r == point_r {
                print!("{}", loss);   
            } else {
                print!("{}", empy);
            }
        }
        println!("");
    }
}

fn main () {
    println!("Ache o Diferente");
    println!("");
    draw(50, 50);
}