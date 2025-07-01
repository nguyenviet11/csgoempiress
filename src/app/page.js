'use client'
import styles from "./page.module.css";
// import circel from "../../public/R-tron.png";
// import image from "../../public/image.png";
import Image from "next/image";

export default function Home() {
  const handleClick = () => {
      window.location.href = "/csgoempires-connecting"; 
  }

  return (
   <div 
      // onMouseMove={handleClick}
      // onClick={handleClick}
    >
      <main className={styles.main}>
       Cấu trúc câu đa dạng: Tránh lặp đi lặp lại một kiểu câu. Hãy kết hợp các loại câu đơn giản, câu phức, câu ghép để tạo sự linh hoạt cho đoạn văn.
Sử dụng các liên từ: Các liên từ như “however”, “therefore”, “in addition” sẽ giúp các ý trong đoạn văn được kết nối chặt chẽ với nhau.
Đưa ra ví dụ minh họa: Sử dụng các ví dụ thực tế để làm cho đoạn văn của bạn trở nên dễ hiểu và thuyết phục hơn.
Kiểm tra ngữ pháp: Sau khi hoàn thành, hãy dành thời gian để kiểm tra lại ngữ pháp, chính tả và cách dùng từ.
Ví dụ về chủ đề và cách triển khai:

Chủ đề: Tầm quan trọng của giấc ngủ
Ý tưởng: Giấc ngủ đủ giấc giúp cải thiện trí nhớ, tăng cường hệ miễn dịch, giảm stress. Thiếu ngủ có thể dẫn đến nhiều vấn đề sức khỏe khác nhau.
Đoạn văn mẫu: Sleep is essential for overall health. Getting enough sleep helps improve memory, boost the immune system, and reduce stress. Lack of sleep can lead to various health problems, such as obesity, heart disease, and mental health disorders. (Giấc ngủ rất cần thiết cho sức khỏe tổng thể. Ngủ đủ giấc giúp cải thiện trí nhớ, tăng cường hệ miễn dịch và giảm căng thẳng. Thiếu ngủ có thể dẫn đến nhiều vấn đề sức khỏe khác nhau, chẳng hạn như béo phì, bệnh tim và rối loạn sức khỏe tâm thần.)
      </main>
    </div>
  )
}