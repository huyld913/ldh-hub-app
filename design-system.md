**ĐẠI HỌC KINH TẾ TP.HCM**

**KHOA CÔNG NGHỆ THÔNG TIN KINH DOANH**

***ĐỀ TÀI:***   
**XÂY DỰNG HỆ THỐNG QUẢN LÝ VÀ ĐẶT SÂN BÓNG**

**Môn học:** *Phân tích thiết kế hệ thống*

**Giảng viên:** *ThS. Hồ Thị Thanh Tuyến*

**Mã lớp học phần:** *26D5INF50901001*

**Sinh viên \- MSSV:** *Lê Đức Huy \- 35254020044*

					*Võ Thùy Dương \- 33251020069*

***TP. Hồ Chí Minh, ngày 31 tháng 3 năm 2026***

**Mục lục**

**[CHƯƠNG 1: TỔNG QUAN	4](#chương-1:-tổng-quan)**

[**1.1. Giới thiệu về hệ thống	4**](#1.1.-giới-thiệu-về-hệ-thống)

[**1.2. Mục tiêu của hệ thống	5**](#1.2.-mục-tiêu-của-hệ-thống)

[**1.3. Phạm vi của hệ thống	5**](#1.3.-phạm-vi-của-hệ-thống)

[**CHƯƠNG 2: XÁC ĐỊNH YÊU CẦU	6**](#chương-2:-xác-định-yêu-cầu)

[**2.1. Khảo sát hệ thống	6**](#2.1.-khảo-sát-hệ-thống)

[**2.1.1. Biên bản phỏng vấn 01: Chủ chuỗi sân bóng (Owner/Manager)	6**](#2.1.1.-biên-bản-phỏng-vấn-01:-chủ-chuỗi-sân-bóng-\(owner/manager\))

[**2.1.2. Biên bản phỏng vấn 02: Nhân viên trực sân bóng	7**](#2.1.2.-biên-bản-phỏng-vấn-02:-nhân-viên-trực-sân-bóng)

[**2.1.3. Biên bản phỏng vấn 03: Khách hàng	8**](#2.1.3.-biên-bản-phỏng-vấn-03:-khách-hàng)

[**2.2. Phân tích hiện trạng	9**](#2.2.-phân-tích-hiện-trạng)

[**2.3. Đặc tả yêu cầu	11**](#2.3.-đặc-tả-yêu-cầu)

[**CHƯƠNG 3: PHÂN TÍCH VÀ THIẾT KẾ HỆ THỐNG	13**](#chương-3:-phân-tích-và-thiết-kế-hệ-thống)

[**3.1. Các yêu cầu chức năng	13**](#3.1.-các-yêu-cầu-chức-năng)

[**3.1.1. Xác định các tác nhân	13**](#3.1.1.-xác-định-các-tác-nhân)

[**3.1.2. Danh sách các yêu cầu chức năng theo tác nhân	14**](#3.1.2.-danh-sách-các-yêu-cầu-chức-năng-theo-tác-nhân)

[**3.2. Phân tích yêu cầu	16**](#3.2.-phân-tích-yêu-cầu)

[**3.2.1. Mô hình hóa chức năng	16**](#3.2.1.-mô-hình-hóa-chức-năng)

[**3.2.2. Mô hình hóa cấu trúc	35**](#3.2.2.-mô-hình-hóa-cấu-trúc)

[**3.2.3. Mô hình hóa hành vi	42**](#3.2.3.-mô-hình-hóa-hành-vi)

[**3.2.4. Mô hình hóa dữ liệu	45**](#3.2.4.-mô-hình-hóa-dữ-liệu)

[**3.3 Thiết kế hệ thống	51**](#3.3-thiết-kế-hệ-thống)

[**3.3.1. Thiết kế lớp	51**](#3.3.1.-thiết-kế-lớp-\(chuyển-đổi-từ-sơ-đồ-lớp-mức-phân-tích-sang-mức-thiết-kế\))

[**3.3.2. Thiết kế CSDL	63**](#3.3.2.-thiết-kế-csdl-\(chuyển-đổi-csdl-từ-mức-quan-niệm-sang-mức-vật-lý\))

[**3.3.3. Thiết kế giao diện	71**](#3.3.3.-thiết-kế-giao-diện)

[**CHƯƠNG 4: TỰ NHẬN XÉT ĐÁNH GIÁ	71**](#chương-4:-tự-nhận-xét-đánh-giá)

[**4.1. Ưu điểm	71**](#4.1.-ưu-điểm)

[**4.2. Nhược điểm	72**](#4.2.-nhược-điểm)

[**4.3. Hướng phát triển	72**](#4.3.-hướng-phát-triển)

[**KẾT LUẬN	73**](#kết-luận)

**DANH MỤC BẢNG**

[Bảng 2.1 Bảng phỏng vấn Chủ chuỗi sân bóng LDH Football Hub	11](#bảng-2.1-bảng-phỏng-vấn-chủ-chuỗi-sân-bóng-ldh-football-hub)

[Bảng 2.2 Bảng phỏng vấn Nhân viên trực sân bóng	12](#bảng-2.2-bảng-phỏng-vấn-nhân-viên-trực-sân-bóng)

[Bảng 2.3 Bảng phỏng vấn Khách hàng	13](#bảng-2.3-bảng-phỏng-vấn-khách-hàng)

[Bảng 2.4 Bảng phân loại và ưu tiên yêu cầu	17](#bảng-2.4-bảng-phân-loại-và-ưu-tiên-yêu-cầu)

[Bảng 3.1 Bảng yêu cầu chức năng của Khách hàng	19](#bảng-3.1-bảng-yêu-cầu-chức-năng-của-khách-hàng)

[Bảng 3.2 Bảng yêu cầu chức năng của Nhân Viên (Khối Vận hành)	20](#bảng-3.2-bảng-yêu-cầu-chức-năng-của-nhân-viên-\(khối-vận-hành\))

[Bảng 3.3 Bảng yêu cầu chức năng của Quản lý / Chủ sân (Khối Quản trị Nền tảng)	21](#bảng-3.3-bảng-yêu-cầu-chức-năng-của-quản-lý-/-chủ-sân-\(khối-quản-trị-nền-tảng\))

[Bảng 3.4 Bảng danh sách Use Case	24](#bảng-3.4-bảng-danh-sách-use-case)

[Bảng 3.5 Bảng Danh sách các lớp đối tượng	66](#bảng-3.5-bảng-danh-sách-các-lớp-đối-tượng)

[Bảng 3.6 Bảng mô tả chi tiết các lớp đối tượng	70](#bảng-3.6-bảng-mô-tả-chi-tiết-các-lớp-đối-tượng)

[Bảng 3.7 Bảng Danh sách các mối quan hệ	72](#bảng-3.7-bảng-danh-sách-các-mối-quan-hệ)

[Bảng 3.8 Danh mục thực thể	94](#bảng-3.8-danh-mục-thực-thể)

[Bảng 3.9 Danh mục các mối kết hợp	96](#bảng-3.9-danh-mục-các-mối-kết-hợp)

[Bảng 3.10 Bảng mô tả chi tiết các lớp	109](#bảng-3.10-bảng-mô-tả-chi-tiết-các-lớp)

[Bảng 3.11 Bảng mô tả chi tiết từng bảng dữ liệu	111](#bảng-3.11-bảng-mô-tả-chi-tiết-từng-bảng-dữ-liệu)

[Bảng 3.12 Bảng Ràng buộc toàn vẹn thực thể	113](#bảng-3.12-bảng-ràng-buộc-toàn-vẹn-thực-thể)

[Bảng 3.13 Bảng Ràng buộc toàn vẹn tham chiếu	114](#bảng-3.13-bảng-ràng-buộc-toàn-vẹn-tham-chiếu)

[Bảng 3.14 Bảng Ràng buộc miền giá trị	116](#bảng-3.14-bảng-ràng-buộc-miền-giá-trị)

[Bảng 3.15 Bảng Ràng buộc nghiệp vụ	118](#bảng-3.15-bảng-ràng-buộc-nghiệp-vụ)

**DANH MỤC HÌNH**

[Hình 3.1 Use Case tổng quát	22](#hình-3.1-use-case-tổng-quát)

[Hình 3.2 Use Case 1 – Đăng nhập	24](#hình-3.2-use-case-1-–-đăng-nhập)

[Hình 3.3 Sơ đồ hoạt động thông tin đăng nhập	27](#hình-3.3-sơ-đồ-hoạt-động-thông-tin-đăng-nhập)

[Hình 3.5 Sơ đồ hoạt động thông tin đăng ký	30](#hình-3.5-sơ-đồ-hoạt-động-thông-tin-đăng-ký)

[Hình 3.6 Use Case 3 – Tra cứu lịch sân	30](#hình-3.6-use-case-3-–-tra-cứu-lịch-sân)

[Hình 3.7 Sơ đồ hoạt động tra cứu lịch sân	32](#hình-3.7-sơ-đồ-hoạt-động-tra-cứu-lịch-sân)

[Hình 3.8 Use Case 4 – Đặt sân	33](#hình-3.8-use-case-4-–-đặt-sân)

[Hình 3.9 Sơ đồ hoạt động Đặt sân	36](#hình-3.9-sơ-đồ-hoạt-động-đặt-sân)

[Hình 3.10 Use Case 5 – Theo dõi lịch sử đặt sân	36](#hình-3.10-use-case-5-–-theo-dõi-lịch-sử-đặt-sân)

[Hình 3.11 Sơ đồ hoạt động Theo dõi lịch sử đặt sân	39](#hình-3.11-sơ-đồ-hoạt-động-theo-dõi-lịch-sử-đặt-sân)

[Hình 3.12 Use Case 6 – Thanh toán	39](#hình-3.12-use-case-6-–-thanh-toán)

[Hình 3.13 Sơ đồ hoạt động Thanh toán	43](#hình-3.13-sơ-đồ-hoạt-động-thanh-toán)

[Hình 3.14 Use Case 7 – Quản lý đơn đặt sân	43](#hình-3.14-use-case-7-–-quản-lý-đơn-đặt-sân)

[Hình 3.15 Sơ đồ hoạt động Quản lý đơn đặt sân	46](#hình-3.15-sơ-đồ-hoạt-động-quản-lý-đơn-đặt-sân)

[Hình 3.17 Sơ đồ hoạt động Check-in nhận sân	49](#hình-3.17-sơ-đồ-hoạt-động-check-in-nhận-sân)

[Hình 3.18 Use Case 9 \- Quản lý tài khoản cá nhân	49](#hình-3.18-use-case-9---quản-lý-tài-khoản-cá-nhân)

[Hình 3.19 Sơ đồ hoạt động Quản lý tài khoản cá nhân	51](#hình-3.19-sơ-đồ-hoạt-động-quản-lý-tài-khoản-cá-nhân)

[Hình 3.20 Use Case 10 \- Quản lý kho	51](#hình-3.20-use-case-10---quản-lý-kho)

[Hình 3.21 Sơ đồ hoạt động Quản lý kho	53](#hình-3.21-sơ-đồ-hoạt-động-quản-lý-kho)

[Hình 3.22 Use Case 11 \- Quản lý khuyến mãi	53](#hình-3.22-use-case-11---quản-lý-khuyến-mãi)

[Hình 3.23 Sơ đồ hoạt động Quản lý khuyến mãi	55](#hình-3.23-sơ-đồ-hoạt-động-quản-lý-khuyến-mãi)

[Hình 3.25 Sơ đồ hoạt động Quản lý báo cáo thống kê	58](#hình-3.25-sơ-đồ-hoạt-động-quản-lý-báo-cáo-thống-kê)

[Hình 3.26 Use Case 13 \- Quản lý người dùng	58](#hình-3.26-use-case-13---quản-lý-người-dùng)

[Hình 3.27 Sơ đồ hoạt động Quản lý người dùng	59](#hình-3.27-sơ-đồ-hoạt-động-quản-lý-người-dùng)

[Hình 3.28 Use Case 14 – Quản lý sân	60](#hình-3.28-use-case-14-–-quản-lý-sân)

[Hình 3.29 Sơ đồ hoạt động Quản lý sân	62](#hình-3.29-sơ-đồ-hoạt-động-quản-lý-sân)

[Hình 3.30 Use Case 15 – Quản lý dịch vụ	62](#hình-3.30-use-case-15-–-quản-lý-dịch-vụ)

[Hình 3.31 Sơ đồ hoạt động Quản lý dịch vụ	65](#hình-3.31-sơ-đồ-hoạt-động-quản-lý-dịch-vụ)

[Hình 3.32 Sơ đồ tuần tự Use Case 1 – Đăng nhập	73](#hình-3.32-sơ-đồ-tuần-tự-use-case-1-–-đăng-nhập)

[Hình 3.33 Sơ đồ tuần tự Use Case 2 – Đăng ký	75](#hình-3.33-sơ-đồ-tuần-tự-use-case-2-–-đăng-ký)

[Hình 3.34 Sơ đồ tuần tự Use Case 3 – Tra cứu lịch sân	75](#hình-3.34-sơ-đồ-tuần-tự-use-case-3-–-tra-cứu-lịch-sân)

[Hình 3.35 Sơ đồ tuần tự Use Case 4 – Đặt sân	77](#hình-3.35-sơ-đồ-tuần-tự-use-case-4-–-đặt-sân)

[Hình 3.36 Sơ đồ tuần tự Use Case 5 – Theo dõi lịch sử đặt sân	78](#hình-3.36-sơ-đồ-tuần-tự-use-case-5-–-theo-dõi-lịch-sử-đặt-sân)

[Hình 3.37 Sơ đồ tuần tự Use Case 6 – Thanh toán	80](#hình-3.37-sơ-đồ-tuần-tự-use-case-6-–-thanh-toán)

[Hình 3.38 Sơ đồ tuần tự Use Case 7 – Quản lý đơn đặt sân	82](#hình-3.38-sơ-đồ-tuần-tự-use-case-7-–-quản-lý-đơn-đặt-sân)

[Hình 3.39 Sơ đồ tuần tự Use Case 9 – Quản lý tài khoản cá nhân	83](#hình-3.39-sơ-đồ-tuần-tự-use-case-9-–-quản-lý-tài-khoản-cá-nhân)

[Hình 3.40 Sơ đồ tuần tự Use Case 10 – Quản lý kho	84](#hình-3.40-sơ-đồ-tuần-tự-use-case-10-–-quản-lý-kho)

[Hình 3.41 Sơ đồ tuần tự Use Case 11 – Quản lý khuyến mãi	85](#hình-3.41-sơ-đồ-tuần-tự-use-case-11-–-quản-lý-khuyến-mãi)

[Hình 3.42 Sơ đồ tuần tự Use Case 12 – Quản lý báo cáo thống kê	86](#hình-3.42-sơ-đồ-tuần-tự-use-case-12-–-quản-lý-báo-cáo-thống-kê)

[Hình 3.43 Sơ đồ tuần tự Use Case 13 – Quản lý người dùng	87](#hình-3.43-sơ-đồ-tuần-tự-use-case-13-–-quản-lý-người-dùng)

[Hình 3.44 Sơ đồ tuần tự Use Case 14 – Quản lý sân	88](#hình-3.44-sơ-đồ-tuần-tự-use-case-14-–-quản-lý-sân)

[Hình 3.45 Sơ đồ tuần tự Use Case 15 – Quản lý dịch vụ	89](#hình-3.45-sơ-đồ-tuần-tự-use-case-15-–-quản-lý-dịch-vụ)

[Hình 3.46 Sơ đồ Thực thể Liên kết (ERD)	91](#hình-3.46-sơ-đồ-thực-thể-liên-kết-\(erd\))

[Hình 3.47 Sơ đồ lớp mức thiết kế (Class Diagram)	97](#hình-3.47-sơ-đồ-lớp-mức-thiết-kế-\(class-diagram\))

[Hình 3.48 Sơ đồ CSDL mức vật lý	109](#hình-3.48-sơ-đồ-csdl-mức-vật-lý)

[Hình 3.49 Wireframe/mockup giao diện hệ thống	118](#hình-3.49-wireframe/mockup-giao-diện-hệ-thống)

# 

# **CHƯƠNG 1: TỔNG QUAN** {#chương-1:-tổng-quan}

## **1.1. Giới thiệu về hệ thống** {#1.1.-giới-thiệu-về-hệ-thống}

Trong bối cảnh nền kinh tế số và nhu cầu rèn luyện sức khỏe, thể dục thể thao của người dân ngày càng tăng cao, mô hình kinh doanh sân bóng đá mini nhân tạo đang phát triển mạnh mẽ tại các khu vực đô thị. Ghi nhận thực tế cho thấy, nhiều đơn vị đầu tư đã bắt đầu mở rộng quy mô từ một sân lẻ tẻ thành chuỗi các cơ sở sân bóng tại nhiều vị trí địa lý khác nhau nhằm khai thác tối đa tiềm năng của thị trường.

Tuy nhiên, kèm theo sự tăng trưởng về quy mô là những thách thức không nhỏ trong khâu vận hành, quản lý. Hiện nay, phần lớn các chủ sân bóng vẫn duy trì quy trình quản lý mang tính thủ công hoặc bán tự động như: ghi chép lịch báo sân trên sổ giấy, sử dụng bảng tính Excel rời rạc, nhận lịch đặt sân chủ yếu qua các kênh liên lạc cá nhân như điện thoại, Zalo, hay Facebook. Quy trình này bộc lộ những hạn chế cốt lõi như: mất nhiều thời gian kiểm tra lịch trống, dễ xảy ra tình trạng "đụng lịch" (double-booking) gây bức xúc cho khách hàng, khó khăn trong việc đối soát doanh thu hàng ngày, và đặc biệt là thiếu một công cụ tổng quan để chủ doanh nghiệp đánh giá hiệu quả kinh doanh của từng sân.

Để giải quyết triệt để những bất cập nêu trên, dự án xây dựng **Hệ thống Quản lý và Đặt sân bóng** được đề xuất. Đây là một giải pháp phần mềm quản lý tập trung (centralized management system) thiết kế dưới dạng nền tảng ứng dụng trực tuyến. Hệ thống không chỉ cung cấp cho khách hàng một kênh tra cứu và đặt sân chủ động, trực quan mà còn trang bị cho Ban quản lý, Nhân viên một bộ công cụ số hóa toàn diện từ khâu quản lý lịch sân, vật tư, dịch vụ đi kèm cho đến việc tổng hợp báo cáo tài chính một cách chính xác, theo thời gian thực.

## **1.2. Mục tiêu của hệ thống** {#1.2.-mục-tiêu-của-hệ-thống}

Mục tiêu chính của dự án là xây dựng một hệ thống thông tin đáp ứng các yêu cầu quản lý và khai thác dịch vụ trong mô hình sân bóng min cụ thể:

* **Tự động hóa quy trình đặt sân:** Cho phép khách hàng xem lịch trống và đặt sân trực tuyến, giảm phụ thuộc vào nhân sự trực tổng đài.  
* **Tập trung hóa dữ liệu quản lý:** Thống nhất dữ liệu sân bóng, lịch đặt, khách hàng, thanh toán và doanh thu trên một nền tảng duy nhất.  
* **Hỗ trợ quản lý đa cơ sở:** Giúp chủ doanh nghiệp dễ dàng quản lý nhiều sân bóng tại các địa điểm khác nhau.  
* **Nâng cao trải nghiệm khách hàng:** Giảm thời gian chờ đợi, hạn chế sai sót trong đặt sân, cung cấp thông tin rõ ràng và minh bạch.  
* **Tạo nền tảng mở rộng:** Làm cơ sở cho việc tích hợp thêm các dịch vụ như đặt đồ uống, khuyến mãi, thành viên thân thiết trong tương lai.

## **1.3. Phạm vi của hệ thống** {#1.3.-phạm-vi-của-hệ-thống}

Phạm vi của hệ thống trong giai đoạn đầu tập trung vào các chức năng cốt lõi phục vụ hoạt động đặt sân và quản lý vận hành, bao gồm:

* **Đối tượng sử dụng:**  
  * Khách hàng: Người có nhu cầu đặt sân bóng.  
  * Chủ sân/Quản lý: Người quản lý hoạt động của một hoặc nhiều cơ sở.  
  * Nhân viên vận hành: Nhân viên xác nhận lịch, hỗ trợ khách hàng tại sân, hỗ trợ quản lý vận hành sân  
* **Phạm vi chức năng:**  
  * Quản lý thông tin sân bóng, khung giờ hoạt động và giá thuê.  
  * Quản lý lịch đặt sân và trạng thái sử dụng.  
  * Hỗ trợ đặt sân trực tuyến cho khách hàng.  
  * Ghi nhận và quản lý thanh toán.  
  * Tổng hợp báo cáo doanh thu cơ bản.  
* **Giới hạn:**  
  * Chưa tích hợp hệ thống kế toán chuyên sâu.

# **CHƯƠNG 2: XÁC ĐỊNH YÊU CẦU** {#chương-2:-xác-định-yêu-cầu}

## **2.1. Khảo sát hệ thống** {#2.1.-khảo-sát-hệ-thống}

Quá trình khảo sát hệ thống được nhóm thực hiện thông qua phương pháp phỏng vấn sâu và quan sát quy trình vận hành thực tế tại đơn vị kinh doanh sân bóng. Mục tiêu của hoạt động khảo sát là thu thập thông tin về quy trình nghiệp vụ hiện tại, xác định các khó khăn, hạn chế trong công tác quản lý và ghi nhận nhu cầu thực tế của các bên liên quan, làm cơ sở cho việc phân tích và thiết kế hệ thống mới.

Các đối tượng được lựa chọn phỏng vấn bao gồm những vai trò trực tiếp tham gia vào hoạt động vận hành và sử dụng hệ thống: chủ doanh nghiệp, nhân viên trực sân và khách hàng thường xuyên.

### **2.1.1. Biên bản phỏng vấn 01: Chủ chuỗi sân bóng (Owner/Manager)** {#2.1.1.-biên-bản-phỏng-vấn-01:-chủ-chuỗi-sân-bóng-(owner/manager)}

**Thông tin chung:**

- **Người được phỏng vấn:** Anh Lâm Đình Hoàng – Chủ chuỗi sân bóng LDH Football Hub  
- **Thời gian:** 08:30 – 09:15, ngày 10/02/2026  
- **Mục tiêu:** Tìm hiểu nhu cầu quản lý tổng thể, doanh thu và khó khăn trong vận hành nhiều cơ sở

| STT | Câu hỏi | Ghi nhận câu trả lời | Quan sát & Đánh giá |
| :---- | :---- | :---- | :---- |
| 1 | Anh có thể mô tả cách quản lý lịch sân và doanh thu hiện nay không? | Hiện tại mỗi cơ sở có một cuốn sổ và một file Excel riêng. Cuối ngày nhân viên gửi số liệu qua Zalo để tôi tổng hợp lại. | Quy trình phân tán, phụ thuộc nhiều vào con người, dễ sai sót khi tổng hợp. |
| 2 | Khó khăn lớn nhất khi quản lý nhiều cơ sở là gì? | Tôi rất khó theo dõi sân nào hoạt động hiệu quả, sân nào ít khách. Cuối tháng cộng sổ rất mất thời gian. | Thiếu hệ thống báo cáo tập trung và dữ liệu theo thời gian thực. |
| 3 | Anh có gặp vấn đề gì về doanh thu sân không? | Có. Doanh thu thường bị lệch vì nhân viên ghi tay, đôi khi quên nhập đơn hoặc nhầm lẫn. | Vấn đề kiểm soát tài chính, cần hệ thống kế toán đơn giản. |
| 4 | Anh mong muốn điều gì ở hệ thống mới? | Tôi muốn xem được tình hình hoạt động của tất cả cơ sở trên một màn hình, biết doanh thu theo ngày và theo từng sân. | Yêu cầu chức năng: Dashboard quản lý tổng hợp, báo cáo doanh thu. |

##### Bảng 2.1 Bảng phỏng vấn Chủ chuỗi sân bóng LDH Football Hub {#bảng-2.1-bảng-phỏng-vấn-chủ-chuỗi-sân-bóng-ldh-football-hub}

### **2.1.2. Biên bản phỏng vấn 02: Nhân viên trực sân bóng** {#2.1.2.-biên-bản-phỏng-vấn-02:-nhân-viên-trực-sân-bóng}

**Thông tin chung:**

- **Người được phỏng vấn:** Chị Trần Minh Ngọc – Nhân viên trực sân cơ sở Quận 7  
- **Thời gian:** 09:30 – 10:00, ngày 10/02/2026  
- **Mục tiêu:** Khảo sát quy trình tiếp nhận và xử lý đặt sân

| STT | Câu hỏi | Ghi nhận câu trả lời | Quan sát & Đánh giá |
| :---- | :---- | :---- | :---- |
| 1 | Chị thường tiếp nhận đặt sân bằng những hình thức nào? | Chủ yếu là khách gọi điện hoặc nhắn Zalo. Tôi ghi lại vào sổ, sau đó nhập vào Excel. | Dữ liệu cập nhật chậm, dễ xảy ra đặt trùng. |
| 2 | Khi nhiều khách gọi cùng lúc, chị xử lý ra sao? | Rất dễ nhầm giờ hoặc nhầm sân, nhất là giờ cao điểm buổi tối. | Rủi ro nghiệp vụ cao, thiếu công cụ hỗ trợ thời gian thực. |
| 3 | Việc thay đổi hoặc hủy lịch có khó khăn không? | Khó. Tôi phải gọi lại từng khách để báo. Có khi khách không nghe máy. | Thiếu cơ chế thông báo và xác nhận tự động. |
| 4 | Chị mong muốn hệ thống mới hỗ trợ điều gì? | Tôi muốn nhìn một cái là biết sân nào trống, sân nào đã có người đặt. | Yêu cầu chức năng: Lịch sân trực quan, cập nhật realtime. |

##### Bảng 2.2 Bảng phỏng vấn Nhân viên trực sân bóng  {#bảng-2.2-bảng-phỏng-vấn-nhân-viên-trực-sân-bóng}

### **2.1.3. Biên bản phỏng vấn 03: Khách hàng** {#2.1.3.-biên-bản-phỏng-vấn-03:-khách-hàng}

**Thông tin chung:**

- **Người được phỏng vấn:** Anh Phạm Thành Danh – Khách hàng thường xuyên  
- **Thời gian:** 17:00 – 17:15, ngày 10/02/2026  
- **Mục tiêu:** Tìm hiểu nhu cầu và trải nghiệm của khách hàng khi đặt sân

| STT | Câu hỏi | Ghi nhận câu trả lời | Quan sát & Đánh giá |
| :---- | :---- | :---- | :---- |
| 1 | Anh thường đặt sân bằng cách nào? | Tôi hay gọi điện hỏi sân còn trống không rồi mới đặt. | Trải nghiệm phụ thuộc vào thời gian phản hồi của nhân viên. |
| 2 | Anh gặp khó khăn gì khi đặt sân? | Nhiều lúc gọi không ai bắt máy, hoặc phải hỏi lại nhiều lần. | Thiếu kênh đặt sân trực tuyến chủ động. |
| 3 | Anh có mong muốn gì ở hệ thống mới? | Tôi muốn xem lịch trống và giá trên điện thoại, đặt luôn cho tiện. | Yêu cầu chức năng: Đặt sân online, minh bạch thông tin. |

##### Bảng 2.3 Bảng phỏng vấn Khách hàng {#bảng-2.3-bảng-phỏng-vấn-khách-hàng}

## **2.2. Phân tích hiện trạng** {#2.2.-phân-tích-hiện-trạng}

Dựa trên kết quả khảo sát và các biên bản phỏng vấn được trình bày ở mục 2.1, nhóm thực hiện tiến hành phân tích hiện trạng hệ thống quản lý sân bóng đang được áp dụng tại đơn vị. Mục tiêu của việc phân tích hiện trạng nhằm làm rõ những bất cập trong quy trình vận hành hiện tại, đánh giá mức độ hiệu quả của hệ thống cũ và xác định các yêu cầu thay đổi cần thiết cho hệ thống mới.

#### **2.2.1. Mô tả hệ thống hiện tại**

Hiện nay, đơn vị kinh doanh đang vận hành hệ thống quản lý dựa trên các phương pháp thủ công và bán tự động, bao gồm:

**Quản lý đặt sân:**

- Khách hàng đặt sân chủ yếu qua điện thoại hoặc tin nhắn Zalo.  
- Nhân viên trực sân ghi chép lịch đặt vào sổ tay hoặc file Excel riêng lẻ theo từng cơ sở.  
- Không có cơ chế kiểm tra trùng lịch tự động giữa các nhân viên.  
  **Quản lý doanh thu và kế toán:**  
- Doanh thu sân bóng được tổng hợp thủ công vào cuối ngày.  
- Số liệu từ các cơ sở được gửi qua tin nhắn cho chủ doanh nghiệp để tổng hợp.  
- Hệ thống hiện tại không có nền tảng phần mềm tập trung để quản lý đồng bộ toàn bộ hoạt động kinh doanh.

#### **2.2.2. Những thiếu sót và bất cập**

Từ việc mô tả hiện trạng, nhóm ghi nhận các vấn đề chính như sau:

- Dữ liệu phân tán và thiếu đồng bộ: Thông tin đặt sân, doanh thu nằm rải rác ở nhiều nguồn khác nhau (sổ tay, Excel, tin nhắn), gây khó khăn trong việc tra cứu và tổng hợp.  
- Nguy cơ đặt trùng sân: Do không có hệ thống cập nhật thời gian thực, nhiều nhân viên có thể tiếp nhận đặt sân cùng một khung giờ, dẫn đến trùng lịch.  
- Quy trình thủ công, phụ thuộc con người: Phần lớn các thao tác đều dựa vào ghi chép và trí nhớ của nhân viên, dễ phát sinh sai sót.  
- Thiếu công cụ hỗ trợ quản lý đa cơ sở: Chủ doanh nghiệp không thể theo dõi tình trạng hoạt động của từng cơ sở một cách kịp thời.  
- Hạn chế trải nghiệm khách hàng: Khách hàng phải chủ động liên hệ để hỏi lịch trống, không có kênh đặt sân trực tuyến.

#### **2.2.3. Đánh giá sự dư thừa và tốn kém**

Các bất cập trong hệ thống hiện tại dẫn đến nhiều lãng phí và chi phí phát sinh:

- Lãng phí thời gian: Nhân viên mất nhiều thời gian ghi chép, xác nhận và gọi điện lại cho khách hàng.  
- Sai lệch doanh thu: Việc ghi nhận thủ công đơn đặt đặt sân và tiền thuê sân dễ dẫn đến thiếu hoặc nhầm lẫn số liệu.  
- Chi phí vận hành tăng cao: Cần nhiều nhân sự để xử lý các công việc lặp lại, trong khi hiệu quả không cao.  
- Rủi ro uy tín: Các sự cố như đặt trùng sân hoặc sai giờ ảnh hưởng trực tiếp đến trải nghiệm và sự hài lòng của khách hàng.

#### **2.2.4. Các yêu cầu thay đổi và định hướng cải tiến**

Từ các vấn đề được xác định, hệ thống mới cần được xây dựng theo các định hướng sau:

1. **Xây dựng hệ thống quản lý tập trung:** Tất cả dữ liệu về sân bóng, lịch đặt, dịch vụ đi kèm và doanh thu được lưu trữ và quản lý trên một nền tảng duy nhất.  
2. **Tự động hóa quy trình đặt sân:** Cho phép khách hàng xem lịch trống và đặt sân trực tuyến, hạn chế sự can thiệp thủ công của nhân viên.  
3. **Hỗ trợ kế toán đơn giản:** Tự động tổng hợp doanh thu sân bóng theo ngày, ca và cơ sở.  
4. **Hỗ trợ quản lý đa cơ sở:** Chủ doanh nghiệp có thể theo dõi và so sánh hiệu quả hoạt động giữa các cơ sở.

## **2.3. Đặc tả yêu cầu** {#2.3.-đặc-tả-yêu-cầu}

Dựa trên kết quả khảo sát hệ thống (mục 2.1) và phân tích hiện trạng (mục 2.2), nhóm thực hiện tiến hành đặc tả các yêu cầu của hệ thống quản lý sân bóng. Các yêu cầu được phân loại thành yêu cầu chức năng và yêu cầu phi chức năng, đồng thời được sắp xếp theo mức độ ưu tiên nhằm làm cơ sở cho quá trình phân tích và thiết kế hệ thống ở các chương tiếp theo.

#### **2.3.1. Yêu cầu chức năng**

##### **Nhóm yêu cầu dành cho quản lý sân bóng**

- FR1 – Quản lý thông tin sân bóng: Hệ thống cho phép quản lý tạo, chỉnh sửa, cập nhật và xóa thông tin sân bóng, bao gồm: tên sân, địa điểm, giá thuê theo giờ và khung giờ hoạt động.  
- FR2 – Quản lý khung giờ và lịch sân: Hệ thống cho phép thiết lập và hiển thị lịch hoạt động của từng sân theo ngày và khung giờ, hỗ trợ kiểm tra tình trạng trống/đã đặt.  
- FR3 – Đặt sân trực tuyến: Khách hàng có thể tra cứu lịch trống, lựa chọn sân và khung giờ, sau đó thực hiện đặt sân thông qua hệ thống.  
- FR4 – Quản lý đơn đặt sân: Nhân viên và quản lý có thể xem, xác nhận, chỉnh sửa hoặc hủy các đơn đặt sân khi cần thiết.

##### Nhóm yêu cầu kế toán – báo cáo

- FR5 – Ghi nhận doanh thu sân bóng: Hệ thống tự động ghi nhận doanh thu từ các đơn đặt sân đã hoàn thành.  
- FR6 – Báo cáo doanh thu: Hệ thống cung cấp báo cáo doanh thu theo ngày, theo ca làm việc và theo từng cơ sở.

##### **Nhóm yêu cầu quản lý người dùng**

- FR7 – Quản lý tài khoản người dùng: Hệ thống cho phép tạo và phân quyền người dùng theo vai trò: quản lý, nhân viên và khách hàng.

#### **2.3.2. Yêu cầu phi chức năng (Non-functional Requirements)**

- NFR1 – Hiệu năng: Hệ thống phải phản hồi các thao tác cơ bản (xem lịch, tạo đơn, đặt sân) trong thời gian không quá 5 giây.  
- NFR2 – Tính khả dụng: Giao diện hệ thống cần đơn giản, dễ sử dụng, phù hợp với nhân viên vận hành và khách hàng phổ thông.  
- NFR3 – Tính tin cậy: Dữ liệu lịch đặt sân và doanh thu phải được lưu trữ chính xác, hạn chế tối đa tình trạng mất mát hoặc trùng lặp dữ liệu.  
- NFR4 – Bảo mật: Hệ thống phải đảm bảo phân quyền truy cập rõ ràng, người dùng chỉ được thực hiện các chức năng phù hợp với vai trò được cấp.  
- NFR5 – Khả năng mở rộng: Hệ thống cho phép mở rộng thêm các chức năng như thanh toán trực tuyến, chương trình khách hàng thân thiết trong tương lai.

#### **2.3.3. Phân loại và ưu tiên yêu cầu**

| Nhóm yêu cầu | Nội dung |
| :---- | :---- |
| **Bắt buộc** | Quản lý sân bóng, quản lý lịch, đặt sân, ghi nhận doanh thu. |
| **Ưu tiên** | Báo cáo doanh thu chi tiết, phân quyền người dùng, theo dõi trạng thái đơn. |
| **Mở rộng** | Thanh toán trực tuyến, đặt đồ uống trước, chương trình khuyến mãi và khách hàng thân thiết. |

##### Bảng 2.4 Bảng phân loại và ưu tiên yêu cầu {#bảng-2.4-bảng-phân-loại-và-ưu-tiên-yêu-cầu}

Các yêu cầu bắt buộc và ưu tiên sẽ được xem xét triển khai trước trong giai đoạn đầu của dự án, trong khi các yêu cầu mở rộng sẽ được nghiên cứu và phát triển trong các giai đoạn tiếp theo.

# **CHƯƠNG 3: PHÂN TÍCH VÀ THIẾT KẾ HỆ THỐNG** {#chương-3:-phân-tích-và-thiết-kế-hệ-thống}

## **3.1. Các yêu cầu chức năng** {#3.1.-các-yêu-cầu-chức-năng}

Dựa trên các yêu cầu đã được đặc tả tại mục 2.3, nhóm tiến hành tổng hợp và hệ thống hóa các yêu cầu chức năng của hệ thống quản lý sân bóng. Mục tiêu của mục này là xác định rõ các chức năng mà hệ thống phải thực hiện và đối tượng (actor) tương tác với từng chức năng, làm cơ sở cho việc xây dựng các mô hình Use Case và các sơ đồ phân tích ở các mục tiếp theo.

### **3.1.1. Xác định các tác nhân** {#3.1.1.-xác-định-các-tác-nhân}

Các tác nhân chính tham gia tương tác với hệ thống bao gồm:

- **Khách hàng:** Người sử dụng hệ thống để tra cứu thông tin và đặt sân bóng.  
- **Nhân viên:** Người tiếp nhận, quản lý và xác nhận các đơn đặt sân.  
- **Quản lý / Chủ sân:** Người quản lý toàn bộ hoạt động của hệ thống, bao gồm sân bóng và doanh thu.

### **3.1.2. Danh sách các yêu cầu chức năng theo tác nhân** {#3.1.2.-danh-sách-các-yêu-cầu-chức-năng-theo-tác-nhân}

Từ 7 nhóm yêu cầu chức năng cốt lõi đã được định nghĩa ở mục 2.3.1 (Chương 2), hệ thống thực hiện phân rã chi tiết thành 17 Yêu cầu chức năng thành phần (FR01 \- FR17). Mỗi một tác nhân (Actor) sẽ có từng vùng thực thi (Boundaries) được định nghĩa cụ thể trong bảng dưới đây:

#### **Nhóm 1: Yêu cầu chức năng của Khách hàng**

| Mã FR | Tên chức năng | Chi tiết yêu cầu |
| :---- | :---- | :---- |
| FR01 | Quản lý định danh cá nhân | Đăng ký, đăng nhập (Xác thực bằng SĐT/Email), khôi phục mật khẩu và cập nhật thông tin cá nhân. |
| FR02 | Tra cứu sân & Lịch trống | Khách hàng duyệt danh sách các loại sân (Sân 5-7), tra cứu bảng giá, xem lịch sân theo ngày ở thời gian thực. |
| FR03 | Đặt sân trực tuyến | Lựa chọn sân, khung giờ, điền chi chú (nếu có) và xác nhận đẩy yêu cầu khóa khung giờ vào hệ thống. |
| FR04 | Theo dõi lịch sử & Hủy đặt sân | Liệt kê các lần đặt sân tại cơ sở và kiểm tra tiến trình xác nhận; theo dõi trạng thái đơn (Chờ/Đã nhận/Hủy). Khách hàng có thể hủy đơn đặt sân chưa diễn ra nếu còn trong thời hạn cho phép. |
| FR05 | Thanh toán trực tuyến/Tại quầy | Tra cứu thông tin bill điện tử, hỗ trợ tạo QR nạp tiền hoặc xác nhận giao dịch khi hệ thống báo trả. |
| FR06 | Áp dụng mã khuyến mãi | Nhân viên nhập mã Voucher tại quầy, hệ thống kiểm duyệt và giảm trừ tổng số tiền thanh toán cho Bill tương ứng. |
| FR07 | Đánh giá, phản hồi trải nghiệm | Chức năng Rating bằng sao và gõ văn bản góp ý về chất lượng sân, dịch vụ ngay trên nền tảng. |

##### Bảng 3.1 Bảng yêu cầu chức năng của Khách hàng {#bảng-3.1-bảng-yêu-cầu-chức-năng-của-khách-hàng}

#### **Nhóm 2: Yêu cầu chức năng của Nhân viên (Khối Vận hành)**

| Mã FR | Tên chức năng | Chi tiết yêu cầu |
| :---- | :---- | :---- |
| FR08 | Quản lý Đơn đặt sân (Cốt lõi) | Duyệt đơn online của người dùng, tạo lập đơn từ vãng lai trực tiếp, thao tác dời giờ/hủy giờ trong quy định. |
| FR09 | Xử lý Check-in nhận sân | Đánh dấu sự có mặt của khách, bắt đầu tính ca |
| FR10 | Quản lý thông tin tài khoản | Đăng nhập hệ thống bằng Tên đăng nhập cấp phát, đổi mật khẩu định kỳ để nâng cao tính bảo an của phiên. |
| FR11 | Quản lý Kho vật tư (Bán/Thuê) | Chủ động cộng thêm lượng hàng xuất kho (Nước bổ sung, tiền thuê giày, thiết bị khác) cho khách báo tại quầy. |

##### Bảng 3.2 Bảng yêu cầu chức năng của Nhân Viên (Khối Vận hành) {#bảng-3.2-bảng-yêu-cầu-chức-năng-của-nhân-viên-(khối-vận-hành)}

#### **Nhóm 3: Yêu cầu chức năng của Quản lý / Chủ sân (Khối Quản trị Nền tảng)**

*(Quản lý được kế thừa toàn quyền giám sát hệ thống của nhân viên)*

| Mã FR | Tên chức năng | Chi tiết yêu cầu |
| :---- | :---- | :---- |
| FR12 | Quản lý Thông tin Cơ sở & Sân | Thiết lập danh mục chuỗi cơ sở, thêm/xóa sân, cấu hình định mức giá linh động giữa khung Thường và Vàng. |
| FR13 | Quản lý Dịch vụ Phụ trợ | Xây dựng các menu Nước Giải Khát/Dịch vụ phát sinh với khung giá chính quy để Nhân sự dùng bán hàng. |
| FR14 | Quản lý Khuyến mãi đa nền tảng | Generate bộ mã giảm giá, thiết lập số lượt sử dụng tối đa và quy định ràng buộc thời gian End Campaign. |
| FR15 | Báo cáo & Thống kê Doanh thu | Khởi chạy Dashboard xuất biểu đồ Doanh thu chi tiết theo Ngày/Tuần/Tháng cho từng chi nhánh cơ sở hoạt động. |
| FR16 | Quản lý Phân bổ Nhân sự | Cấp phát mới, reset pass, hoặc thu hồi tài khoản cho danh sách nhân viên; Gán quyền phụ trách theo từng Cơ sở. |
| FR17 | Quản trị Ý kiến hòm Góp ý | Đọc thông cáo các Đánh giá/Rating, tùy chỉnh hiển thị review tích cực hoặc xử lý các phàn nàn của khách hàng. |

##### Bảng 3.3 Bảng yêu cầu chức năng của Quản lý / Chủ sân (Khối Quản trị Nền tảng) {#bảng-3.3-bảng-yêu-cầu-chức-năng-của-quản-lý-/-chủ-sân-(khối-quản-trị-nền-tảng)}

## **3.2. Phân tích yêu cầu** {#3.2.-phân-tích-yêu-cầu}

### **3.2.1. Mô hình hóa chức năng** {#3.2.1.-mô-hình-hóa-chức-năng}

Dựa trên danh sách các yêu cầu chức năng đã được xác định tại mục 3.1, nhóm tiến hành mô hình hóa chức năng của hệ thống thông qua sơ đồ Use Case. Sơ đồ Use Case giúp mô tả mối quan hệ giữa các tác nhân (actors) và các chức năng chính mà hệ thống cung cấp, từ đó làm rõ phạm vi và hành vi tổng thể của hệ thống.

Sơ đồ Use Case tổng quát của hệ thống bao gồm 15 Use Case, thể hiện sự tương tác của 3 tác nhân chính:

- **Khách hàng**: Tương tác với nhóm chức năng dịch vụ (Tra cứu, Đặt sân, Thanh toán, Khuyến mãi, Đánh giá...).  
- **Nhân viên trực sân**: Tương tác với nhóm chức năng vận hành trực tiếp (Xử lý đơn, Check-in, Lập hóa đơn...).  
- **Quản lý/Chủ sân**: Có toàn quyền của nhân viên, đồng thời tương tác với nhóm chức năng quản trị hệ thống (Cấu hình sân, Quản lý nhân sự, Thống kê báo cáo doanh thu chuỗi cơ sở).

######  Hình 3.1 Use Case tổng quát {#hình-3.1-use-case-tổng-quát}

#### 

#### **3.2.1.1. Danh sách các Use Case**

Bảng dưới đây liệt kê các Use Case chính của hệ thống, tương ứng với các nhóm yêu cầu chức năng (FR) vừa được thiết lập ở Phần 3.1:

| Mã Use Case | Tên Use Case | Tác nhân liên quan | Mã Yêu cầu chức năng (FR) |
| :---- | :---- | :---- | :---- |
| 1 | Đăng nhập | Quản lý, nhân viên, khách hàng | FR01, FR10 |
| 2 | Đăng ký | Khách hàng | FR01 |
| 3 | Tra cứu lịch sân | Khách hàng | FR02 |
| 4 | Đặt sân | Khách hàng | FR03 |
| 5 | Theo dõi lịch sử đặt sân | Khách hàng | FR04 |
| 6 | Thanh toán | Khách hàng, Nhân viên | FR05, FR06 |
| 7 | Quản lý đơn đặt sân | Quản lý, nhân viên | FR08 |
| 8 | Check-in nhận sân | Quản lý, nhân viên | FR09 |
| 9 | Quản lý tài khoản cá nhân | Quản lý, nhân viên, khách hàng | FR01, FR10 |
| 10 | Quản lý kho | Quản lý, nhân viên | FR11 |
| 11 | Quản lý khuyến mãi | Quản lý | FR14 |
| 12 | Quản lý báo cáo thống kê | Quản lý | FR15 |
| 13 | Quản lý người dùng | Quản lý | FR16 |
| 14 | Quản lý sân | Quản lý | FR12 |
| 15 | Quản lý dịch vụ | Quản lý | FR13 |

##### Bảng 3.4 Bảng danh sách Use Case {#bảng-3.4-bảng-danh-sách-use-case}

#### **3.2.1.2. Mô tả chi tiết các Use Case**

Phần này phân tích yêu cầu dưới dạng danh sách toàn bộ Use Case của hệ thống đã được định nghĩa. Mỗi Use Case sẽ đi kèm với bản mô tả chi tiết của luồng hành vi (Flow of Events) và Sơ đồ hoạt động (Activity Diagram) tương ứng nhằm giúp quá trình lập trình diễn ra suôn sẻ.

##### **1\. Use Case 1 – Đăng nhập**

![][image1]

###### Hình 3.2 Use Case 1 – Đăng nhập {#hình-3.2-use-case-1-–-đăng-nhập}

- **Tác nhân chính:** Quản lý, nhân viên, khách hàng  
- **Mục đích:** Xác thực danh tính người dùng để cho phép truy cập vào các chức năng tương ứng của hệ thống tùy theo phân quyền (Role).  
- **Điều kiện tiên quyết:** Người dùng đã sở hữu tài khoản hợp lệ trên hệ thống.  
- **Luồng sự kiện chính (Main Flow):**  
  * Actor: Truy cập vào trang/màn hình Đăng nhập của hệ thống.  
  * Actor: Nhập thông tin tài khoản (Số điện thoại / Email) và Mật khẩu, sau đó nhấn "Đăng nhập".  
  * Hệ thống: Kiểm tra tính hợp lệ của dữ liệu đầu vào.  
  * Hệ thống (Business Logic): Mã hóa mật khẩu và đối chiếu thông tin đăng nhập với CSDL.  
  * Hệ thống: Trả kết quả xác thực thành công và điều hướng người dùng tới giao diện làm việc tương ứng.  
- **Luồng thay thế (Alternate Flow):**  
  * **4a.** Sai thông tin đăng nhập → Hệ thống hiển thị thông báo "Tài khoản hoặc mật khẩu không chính xác", yêu cầu đăng nhập lại.  
- **Hậu điều kiện:** Người dùng đăng nhập thành công và có thể sử dụng hệ thống.

**Sơ đồ hoạt động (Activity Diagram)**

*![][image2]*

###### Hình 3.3 Sơ đồ hoạt động thông tin đăng nhập {#hình-3.3-sơ-đồ-hoạt-động-thông-tin-đăng-nhập}

##### **2\. Use Case 2 – Đăng ký**

![][image3]

Hình 3.4 Use Case 2 – Đăng ký

- **Tác nhân chính:** Khách hàng  
- **Mục đích:** Cho phép người dùng mới tạo một tài khoản định danh trên hệ thống để thực hiện đặt sân và quản lý lịch sử.  
- **Điều kiện tiên quyết:** Người dùng chưa có tài khoản hợp lệ trên hệ thống.  
- **Luồng sự kiện chính (Main Flow):**  
  * Actor: Truy cập vào màn hình "Đăng ký" tài khoản.  
  * Actor: Nhập thông tin (Họ tên, SĐT, Email, Mật khẩu, Xác nhận mật khẩu) và bấm "Đăng ký".  
  * Hệ thống: Validate dữ liệu (kiểm tra định dạng, độ mạnh mật khẩu, khớp mật khẩu).  
  * Hệ thống (Business Logic): Kiểm tra tránh trùng lặp tài khoản (SĐT/Email đã tồn tại trong CSDL chưa).  
  * Hệ thống: Lưu bản ghi người dùng mới vào CSDL với mật khẩu mã hóa.  
  * Hệ thống: Thông báo "Đăng ký thành công".  
- **Luồng thay thế (Alternate Flow):**  
  * Dữ liệu không hợp lệ → Hệ thống yêu cầu nhập lại định dạng đúng.  
  * Tài khoản đã tồn tại → Hệ thống báo lỗi "Số điện thoại/Email đã được sử dụng".  
- **Hậu điều kiện:** Một tài khoản Khách hàng mới được khởi tạo và ghi nhận vào hệ thống.

**Sơ đồ hoạt động (Activity Diagram)**  
![][image4]

###### Hình 3.5 Sơ đồ hoạt động thông tin đăng ký {#hình-3.5-sơ-đồ-hoạt-động-thông-tin-đăng-ký}

##### **3\. Use Case 3 – Tra cứu lịch sân**

![][image5]

###### Hình 3.6 Use Case 3 – Tra cứu lịch sân {#hình-3.6-use-case-3-–-tra-cứu-lịch-sân}

- **Tác nhân chính:** Khách hàng  
- **Mục đích:** Giúp Khách hàng thiết lập các điều kiện tìm kiếm để xem trực quan tình trạng trống/kín của các sân bóng, từ đó có cơ sở dữ liệu để đưa ra quyết định đặt sân chính xác.  
- **Điều kiện tiên quyết:** Khách hàng truy cập vào hệ thống (có thể chưa cần đăng nhập).  
- **Luồng sự kiện chính (Main Flow):**  
  * Actor: Khách hàng cung cấp dữ liệu bằng cách chọn các tiêu chí bộ lọc như: Ngày muốn đá, Khung giờ mong muốn, Loại sân (5 người, 7 người, 11 người).  
  * Hệ thống: Tiếp nhận thông tin và kiểm tra tính hợp lệ (validate) của dữ liệu (ví dụ: Không cho phép tra cứu lịch của những ngày trong quá khứ).  
  * Hệ thống (Business Logic): Quét trong CSDL toàn bộ các "Đơn đặt sân" đã tồn tại trong ngày hôm đó, đối chiếu với tổng số sân đang có để loại trừ các sân đã bị đặt hoặc đang bảo trì.  
  * Hệ thống: Trả kết quả quan sát được bằng cách tổng hợp dữ liệu, định dạng hiển thị thành một thời khóa biểu/danh sách các sân còn trống, kèm theo giá tiền tương ứng.  
- **Luồng thay thế / Ngoại lệ (Alternate / Exception Flow):**  
  * Ngày tra cứu không hợp lệ (ngày trong quá khứ hoặc sai định dạng): Hệ thống hiển thị thông báo lỗi "Ngày không hợp lệ, vui lòng chọn lại từ hôm nay trở đi", giữ nguyên giao diện bộ lọc để Khách hàng điều chỉnh và thử lại. Quay về bước (1).  
  * Không tìm thấy sân nào trống theo tiêu chí đã chọn: Hệ thống hiển thị thông báo "Rất tiếc, không còn sân trống cho ngày/giờ/loại sân bạn chọn." Đồng thời, hệ thống chủ động gợi ý các khung giờ lân cận còn trống (trước/sau khung giờ đã chọn) hoặc loại sân tương đương còn khả dụng, để Khách hàng cân nhắc điều chỉnh tiêu chí tìm kiếm và thực hiện tra cứu lại.  
  * Hệ thống gặp lỗi kết nối CSDL trong quá trình xử lý: Hệ thống hiển thị thông báo lỗi kỹ thuật "Không thể tải dữ liệu, vui lòng thử lại sau." Đồng thời ghi nhận sự cố vào hệ thống log nội bộ để hỗ trợ kỹ thuật xử lý.  
- **Hậu điều kiện:** Khách hàng nắm được thông tin sân còn trống theo bộ lọc, hoặc được hệ thống hướng dẫn điều chỉnh lại tiêu chí tìm kiếm trong trường hợp không có kết quả phù hợp.

**Sơ đồ hoạt động (Activity Diagram)**  
![][image6]

###### Hình 3.7 Sơ đồ hoạt động tra cứu lịch sân {#hình-3.7-sơ-đồ-hoạt-động-tra-cứu-lịch-sân}

##### **4\. Use Case 4 – Đặt sân**

![][image7]

###### Hình 3.8 Use Case 4 – Đặt sân {#hình-3.8-use-case-4-–-đặt-sân}

- **Tác nhân chính:** Khách hàng  
- **Mục đích :** Cho phép khách hàng lựa chọn sân và khung giờ trống để thực hiện đặt sân bóng, ghi nhận thông tin và chuyển trạng thái sân.  
- **Điều kiện tiên quyết:** Khách hàng đã đăng nhập vào hệ thống và đã hoàn tất việc Tra cứu lịch sân (Use Case 3\) để xác định được lịch trống.  
- **Luồng sự kiện chính (Main Flow):**  
  * Actor: Từ kết quả của bước Tra cứu lịch sân, Khách hàng chọn sân và khung giờ đang có trạng thái "Trống" trên lịch.  
  * Hệ thống: Chuyển hướng sang giao diện điền thông tin Đặt sân (Tên, SĐT, Ghi chú \- nếu có).  
  * Actor: Khách hàng nhập hoặc kiểm tra lại thông tin và bấm "Xác nhận đặt sân".  
  * Hệ thống: Kiểm tra tính hợp lệ của thông tin form (ví dụ: SĐT đúng định dạng, đã nhập tên).  
  * Hệ thống (Business Logic): Xác nhận giờ trống bằng cách quét CSDL.  
  * Hệ thống: Ghi nhận đơn đặt & Chuyển trạng thái lịch sân từ "Trống" sang "Đã đặt (Chờ nhận)".  
  * Hệ thống: Gửi thông báo thành công đến khách hàng.  
- **Luồng thay thế (Alternate Flow):**  
  * Thông tin không hợp lệ (sai format, bỏ trống) → Hệ thống cảnh báo lỗi, giữ Khách hàng ở bước (2) để nhập lại thông tin.  
  * Khung giờ vừa bị người khác nhanh tay thao tác đặt thành công trước vài giây (Concurrency) → Hệ thống báo lỗi trùng lịch. Lúc này, hệ thống bảo lưu toàn bộ thông tin đã nhập, yêu cầu khách hàng chỉ cần đổi khung giờ trống hoặc sân khác và bấm xác nhận lại (bỏ qua việc gõ lại thông tin).  
- **Hậu điều kiện:** Đơn đặt sân được lưu vào hệ thống. Lịch sân được cập nhật đồng bộ mang tên khách hàng. Việc thanh toán sẽ được thực hiện tại quầy sau khi hoàn thành ca chơi.

**Sơ đồ hoạt động (Activity Diagram)**

*![][image8]*

###### *Hình 3.9* Sơ đồ hoạt động Đặt sân {#hình-3.9-sơ-đồ-hoạt-động-đặt-sân}

##### **5\. Use Case 5 – Theo dõi lịch sử đặt sân**

![][image9]

###### *Hình 3.10* Use Case 5 – Theo dõi lịch sử đặt sân {#hình-3.10-use-case-5-–-theo-dõi-lịch-sử-đặt-sân}

- **Tác nhân chính:** Khách hàng  
- **Mục đích:** Đây là quyền lợi bắt buộc để khách hàng tự quản lý dữ liệu cá nhân; cho phép họ xem lại các sân mình đã đặt (trong quá khứ và tương lai) để không bị quên lịch, đồng thời thực hiện quyền hủy đơn nếu chưa đến giờ đá.  
- **Điều kiện tiên quyết:** Khách hàng đã đăng nhập.  
- **Luồng sự kiện chính (Main Flow):**  
  * Actor: Chọn mục "Lịch sử đặt sân" trên thanh menu cá nhân.  
  * Hệ thống (Database): Chỉ lọc và hiển thị danh sách các Đơn đặt sân mang ID của khách hàng đó. Danh sách có thể được phân loại theo "Sắp diễn ra", "Đã hoàn thành", "Đã hủy".  
  * Actor: Khách hàng bấm xem chi tiết một đơn "Sắp diễn ra" bất kỳ.  
  * Hệ thống: Hiển thị thông tin chi tiết đơn cùng nút "Hủy đặt sân" (nút này chỉ bật nếu thỏa điều kiện thời gian hủy trước giờ bóng lăn theo định mức).  
- **Hậu điều kiện:** Không thay đổi CSDL trừ khi khách hàng thực hiện lệnh hủy.

**Sơ đồ hoạt động (Activity Diagram)**  
![][image10]

###### *Hình 3.11* Sơ đồ hoạt động Theo dõi lịch sử đặt sân {#hình-3.11-sơ-đồ-hoạt-động-theo-dõi-lịch-sử-đặt-sân}

##### **6\. Use Case 6 – Thanh toán**

![][image11]

###### *Hình 3.12* Use Case 6 – Thanh toán {#hình-3.12-use-case-6-–-thanh-toán}

- **Tác nhân chính:** Khách hàng, Nhân viên (hỗ trợ)  
- **Mục đích:** Thực hiện tính toán và ghi nhận việc thanh toán chi phí của khách hàng.  
- **Điều kiện tiên quyết:** Khách hàng có đơn đặt sân đang chờ thanh toán.  
- **Luồng sự kiện chính (Main Flow \- Thanh toán cuối ca):**  
  * Actor: Khách hàng yêu cầu thanh toán trả sân tại quầy và cung cấp mã Khuyến mãi (nếu có).  
  * Actor: Nhân viên thao tác thêm mã Khuyến mãi vào phần mềm.  
  * Hệ thống: Kiểm tra tính hợp lệ của mã khuyến mãi (Còn hạn sử dụng, hợp lệ).  
  * Hệ thống: Truy xuất dữ liệu ca đá thực tế, đối chiếu thời gian Check-in/Check-out. Cộng dồn tiền thuê sân, tiền dịch vụ phát sinh và phụ phí đá lấn giờ (nếu có), đồng thời giảm trừ phần chiết khấu từ mã khuyến mãi.  
  * Hệ thống: Hiển thị cấu trúc Hóa đơn điện tử chi tiết cùng số tiền cuối cùng.  
  * Actor: Khách hàng chọn phương thức thanh toán (Tiền mặt, Chuyển khoản QR/Ví điện tử).  
  * Hệ thống: Thiết lập mã QR Payment động (với số tiền chính xác) hoặc chờ xác nhận "Đã nhận tiền mặt" từ phía Nhân viên trực quầy.  
  * Hệ thống (Gateway/Logic): Nhận callback từ cổng thanh toán báo giao dịch thành công (hoặc nhân viên chốt bill tay). Đảo trạng thái Đơn đặt sân sang "Đã thanh toán".  
- **Luồng thay thế / Ngoại lệ (Alternate / Exception Flow):**  
  * Mã khuyến mãi không hợp lệ (hết hạn, sai mã, đã dùng hết lượt): Hệ thống hiển thị thông báo "Mã khuyến mãi không hợp lệ hoặc đã hết hạn sử dụng". Hóa đơn được tính với tổng tiền đầy đủ, không áp dụng chiết khấu. Nhân viên thông báo lại cho Khách hàng và tiến hành bước thanh toán bình thường.  
  * \[Thanh toán online\] Cổng thanh toán trả về lỗi hoặc giao dịch bị từ chối: Hệ thống nhận callback thất bại từ cổng thanh toán (lỗi kết nối, số dư không đủ, giao dịch bị ngân hàng từ chối). Hệ thống hiển thị thông báo "Thanh toán thất bại – vui lòng thử lại hoặc chọn phương thức khác." Trạng thái Đơn đặt sân giữ nguyên "Chờ thanh toán", không bị thay đổi. Khách hàng có thể thử quét lại mã QR hoặc chuyển sang thanh toán tiền mặt.  
  * \[Thanh toán online\] Quá thời gian chờ xử lý QR (timeout): Hệ thống không nhận được phản hồi từ cổng thanh toán sau khoảng thời gian quy định. Hệ thống hủy phiên QR hiện tại, thông báo "Phiên thanh toán đã hết hạn." Nhân viên có thể tạo lại mã QR mới hoặc chuyển phương thức thanh toán.

- **Hậu điều kiện:** Dữ liệu giao dịch được chuyển vào Sổ quỹ để phục vụ báo cáo. Lượt dùng Khuyến mãi bị trừ đi 1\. Sinh và in/gửi Biên lai cho Khách hàng.

**Sơ đồ hoạt động (Activity Diagram)**  
![][image12]

###### *Hình 3.13* Sơ đồ hoạt động Thanh toán {#hình-3.13-sơ-đồ-hoạt-động-thanh-toán}

##### **7\. Use Case 7 – Quản lý đơn đặt sân**

![][image13]

###### *Hình 3.14* Use Case 7 – Quản lý đơn đặt sân {#hình-3.14-use-case-7-–-quản-lý-đơn-đặt-sân}

- **Tác nhân chính:** Quản lý, nhân viên  
- **Mục đích:** Cho phép nhân viên/quản lý tiếp nhận yêu cầu để tạo mới đơn đặt sân hoặc xử lý các sự cố như dời sân, hủy sân cho khách hàng.  
- **Điều kiện tiên quyết:** Nhân viên/Quản lý đã đăng nhập vào hệ thống.  
- **Luồng sự kiện chính (Main Flow):**  
  * Actor (Nhân viên): Tiếp nhận yêu cầu (tạo mới, dời/hủy sân) hoặc thông tin xử lý sự cố.  
  * Actor (Nhân viên): Mở chức năng/giao diện Lịch sân chi nhánh.  
  * Actor (Nhân viên): Thực hiện thao tác Tạo mới/ Dời sân/ Hủy sân.  
  * Hệ thống: Kiểm tra các điều kiện ràng buộc tính hợp lệ (ví dụ: sân trống, đủ buffer time, thời gian hủy hợp lệ).  
  * Hệ thống: (Trường hợp hợp lệ) Tiến hành Cập nhật CSDL đơn đặt sân.  
  * Hệ thống: Tính toán lại Buffer time cho lịch sân.  
  * Hệ thống: Gửi thông báo đến Khách hàng về sự thay đổi của đơn đặt.  
  * Actor (Khách hàng): Nhận thông báo thay đổi.  
- **Luồng thay thế (Alternate Flow):**  
  * **4a.** Điều kiện không hợp lệ → Hệ thống hiển thị Thông báo lỗi. Sau đó, quy trình quay lại trạng thái Nhân viên thực hiện Thao tác ở bước (3) để điều chỉnh lại thông tin.  
- **Hậu điều kiện:** Đơn đặt sân được tạo mới hoặc cập nhật thông tin thành công đồng bộ trên hệ thống và với khách hàng.

**Sơ đồ hoạt động (Activity Diagram)**  
![][image14]

###### *Hình 3.15* Sơ đồ hoạt động Quản lý đơn đặt sân {#hình-3.15-sơ-đồ-hoạt-động-quản-lý-đơn-đặt-sân}

##### **8\. Use Case 8 – Check-in nhận sân**

![][image15]  
*Hình 3.16* Use Case 8 – Check-in nhận sân

- **Tác nhân chính:** Nhân viên, Quản lý, Khách hàng  
- **Mục đích:** Xác thực khách hàng đã đến sân, kiểm tra tính hợp lệ của đơn đặt sân để giao sân, đồng thời chuyển đổi trạng thái của sân bóng từ "Đã đặt (Chờ nhận)" sang "Đang sử dụng". Bước này đánh dấu mốc thời gian tính tiền vào hệ thống.  
- **Điều kiện tiên quyết:** Khách hàng đến sân và cung cấp thông tin Đơn đặt.  
- **Luồng sự kiện chính (Main Flow):**  
  * Actor: Nhân viên (hoặc Khách tự quét máy) cung cấp thông tin như: số điện thoại, mã đơn đặt sân, hoặc quét mã QR xác nhận.  
  * Hệ thống: Tiếp nhận thông tin, tìm kiếm và hiển thị chi tiết form Đơn đặt sân (Tên khách, Sân số mấy, Giờ bắt đầu).  
  * Hệ thống (Business Logic): Tự động kiểm tra ràng buộc: *Trạng thái của đơn hiện có hợp lệ không?* (Hệ thống đối chiếu mã đơn hoặc SĐT để đảm bảo đơn này tồn tại, chưa bị hủy và chưa được check-in trước đó).  
  * Actor: Sau khi đối chiếu xác minh chính xác, Nhân viên bấm nút "Xác nhận Check-in".  
  * Hệ thống: Thao tác cập nhật vào CSDL:  
    * Đảo trạng thái Đơn đặt sân sang "Đã Check-in".  
    * Chuyển trạng thái Sân bóng cụ thể sang "Đang hoạt động/Có khách".  
    * Ghi nhận Audit Log mốc thời gian check-in thực tế (Đây là biến số quan trọng cài cắm hệ thống dùng để chốt bill thanh toán và tính thêm chi phí nếu ca đá lấn giờ (Overtime)).  
  * Hệ thống: Trả kết quả (Hiển thị "Check-in thành công") và chính thức khóa trạng thái sân trên hệ thống để không bị trùng đơn. Đồng thời, qua cổng API, hệ thống kích hoạt tự động mở rơ-le đèn/điện tại sân (nếu có tích hợp phần cứng).  
- **Luồng thay thế / Ngoại lệ (Alternate / Exception Flow):**  
  * Không tìm thấy đơn đặt sân (mã đơn / SĐT không khớp): Hệ thống thông báo "Không tìm thấy đơn đặt sân tương ứng." Nhân viên yêu cầu Khách hàng kiểm tra lại thông tin (SĐT, mã đơn) hoặc liên hệ hỗ trợ. Quy trình kết thúc mà không thực hiện Check-in.  
  * Đơn đặt sân không hợp lệ (đã bị hủy, đã Check-in trước đó, sai ngày/giờ): Hệ thống phát hiện trạng thái đơn không thỏa điều kiện, hiển thị lý do từ chối cụ thể (ví dụ: "Đơn đã được hủy", "Đơn này đã được Check-in"). Nhân viên từ chối giao sân và thông báo tình trạng cho Khách hàng. Quy trình kết thúc.  
  * Khách hàng đến trễ quá giờ đặt (No-show / Late Arrival): Hệ thống phát hiện thời điểm Check-in thực tế vượt quá khoảng thời gian cho phép so với giờ đặt (theo định mức buffer time của cơ sở). Hệ thống hiển thị cảnh báo "Khách đến trễ X phút so với giờ đặt." Nhân viên xử lý theo chính sách cơ sở: hoặc vẫn cho Check-in với ca đá được rút ngắn tương ứng (thời gian kết thúc giữ nguyên), hoặc hủy đơn và áp dụng phí phạt No-show nếu quá hạn quy định.  
- **Hậu điều kiện:** Sân bóng bắt đầu thuộc quyền sử dụng của khách. Ghi nhận thời gian khởi tạo dịch vụ, khách hàng sẽ thanh toán chi phí một lần sau khi hoàn thành ca chơi.

**Sơ đồ hoạt động (Activity Diagram)**  
![][image16]

###### *Hình 3.17* Sơ đồ hoạt động Check-in nhận sân {#hình-3.17-sơ-đồ-hoạt-động-check-in-nhận-sân}

##### **9\. Use Case 9 \- Quản lý tài khoản cá nhân**

![][image17]

###### *Hình 3.18* Use Case 9 \- Quản lý tài khoản cá nhân {#hình-3.18-use-case-9---quản-lý-tài-khoản-cá-nhân}

- **Tác nhân chính:** Quản lý, Nhân viên, Khách hàng  
- **Mục đích:** Cho phép người dùng theo dõi và tự cập nhật thông tin cá nhân cơ bản; hỗ trợ nhân viên/quản lý đổi mật khẩu định kỳ để nâng cao tính bảo an của phiên.  
- **Điều kiện tiên quyết:** Người dùng đã có tài khoản trên hệ thống.  
- **Luồng sự kiện chính (Main Flow):**  
  * Actor: Chọn chức năng Xem thông tin tài khoản trên menu chính.  
  * Hệ thống: Hiển thị giao diện thông tin cá nhân.  
  * Actor: Thay đổi thông tin cá nhân (Họ tên, SĐT) hoặc bấm chọn đổi mật khẩu.  
  * Hệ thống: Xác thực dữ liệu form (kiểm tra định dạng, độ mạnh mật khẩu).  
  * Hệ thống: Lưu xuống CSDL.  
- **Hậu điều kiện:** Thông tin tài khoản và mật khẩu được hệ thống cập nhật mới nhất.

**Sơ đồ hoạt động (Activity Diagram)**  
![][image18]

###### *Hình 3.19* Sơ đồ hoạt động Quản lý tài khoản cá nhân {#hình-3.19-sơ-đồ-hoạt-động-quản-lý-tài-khoản-cá-nhân}

##### **10\. Use Case 10 \- Quản lý kho**

![][image19]

###### *Hình 3.20* Use Case 10 \- Quản lý kho {#hình-3.20-use-case-10---quản-lý-kho}

- **Tác nhân chính:** Quản lý, Nhân viên  
- **Mục đích:** Ghi nhận quá trình nhập/xuất kho (Nước bổ sung, tiền thuê giày, thiết bị khác) phục vụ công tác nắm bắt lượng tồn kho thực tế.  
- **Điều kiện tiên quyết:** Nhân viên/Quản lý đã đăng nhập.  
- **Luồng sự kiện chính (Main Flow):**  
  * Actor: Chọn chức năng Quản lý tồn kho.  
  * Hệ thống: Tải và hiển thị danh sách các vật phẩm hàng hóa kèm chi tiết Số lượng.  
  * Actor: Cập nhật tăng Số lượng (Nhập kho hàng mới) hoặc giảm Số lượng (Xuất hàng).  
  * Hệ thống: Cập nhật thuộc tính \`ton\_kho\` trong bảng \`DICH\_VU\` của CSDL.  
- **Hậu điều kiện:** Số lượng tồn kho thay đổi đồng bộ.

**Sơ đồ hoạt động (Activity Diagram)**

*![][image20]*

###### *Hình 3.21* Sơ đồ hoạt động Quản lý kho {#hình-3.21-sơ-đồ-hoạt-động-quản-lý-kho}

##### **11\. Use Case 11 \- Quản lý khuyến mãi**

![][image21]

###### *Hình 3.22* Use Case 11 \- Quản lý khuyến mãi {#hình-3.22-use-case-11---quản-lý-khuyến-mãi}

* **Tác nhân chính:** Quản lý  
* **Mục đích:** Tạo mới các chiến dịch Marketing thông qua việc sinh ra mã giảm giá, thiết lập số lượt sử dụng tối đa và quy định ràng buộc thời gian End Campaign.  
* **Điều kiện tiên quyết:** Đăng nhập với quyền truy cập của Quản lý.  
* **Luồng sự kiện chính (Main Flow):**  
  * Actor: Truy cập chức năng Quản lý khuyến mãi.  
  * Hệ thống: Hiển thị danh sách các mã KM hiện có (Active/Expired).  
  * Actor: Bấm Thêm mới và thiết lập tham số (Mã text, Số tiền hoặc % giảm, Điều kiện áp dụng mức giá trị Đơn hàng tối thiểu, Ngày bắt đầu/kết thúc).  
  * Hệ thống: Validate ngày tháng logic và lưu xuống bảng KHUYEN\_MAI trong CSDL.  
* **Hậu điều kiện:** Mã KM mới có hiệu lực trên hệ thống.

**Sơ đồ hoạt động (Activity Diagram)**  
![][image22]

###### *Hình 3.23* Sơ đồ hoạt động Quản lý khuyến mãi {#hình-3.23-sơ-đồ-hoạt-động-quản-lý-khuyến-mãi}

##### **12\. Use Case 12 – Quản lý báo cáo thống kê**

![][image23]  
*Hình 3.24* Use Case 12 – Quản lý báo cáo thống kê

- **Tác nhân chính:** Quản lý / Chủ sân  
- **Mục đích:** Trực quan hóa dữ liệu vận hành theo thời gian thực thành các biểu đồ và bảng số liệu nhằm đánh giá hiệu quả kinh doanh của từng cơ sở.  
- **Điều kiện tiên quyết:** Người dùng phải đăng nhập bằng tài khoản có phân quyền Manager/Admin.  
- **Luồng sự kiện chính (Main Flow):**  
  * Actor: Quản lý truy cập vào Dashboard chức năng "Báo cáo & Thống kê".  
  * Actor: Thiết lập thông số truy vấn gồm: Khoảng thời gian (Ngày/Tuần/Tháng) và Phạm vi (Tất cả cơ sở hay một cụm sân cụ thể).  
  * Hệ thống (Business Logic): Quét, lọc và tổng hợp (Aggregate) toàn bộ các "Hóa đơn đã thanh toán", đơn bị hủy, dữ liệu thu/chi từ CSDL theo đúng bộ lọc.  
  * Hệ thống: Render kết quả lên màn hình qua bộ UI Charts (Biểu đồ cột doanh thu theo ngày, Biểu đồ tròn tỷ trọng dịch vụ so với tiền sân, tỷ lệ lấp đầy sân).  
  * Actor: Quản lý có thể chọn "Export" để trích xuất dữ liệu thô ra định dạng Excel/PDF về máy phân tích thêm.  
- **Hậu điều kiện:** Quản lý có được góc nhìn chi tiết để đưa ra các quyết định điều chỉnh giá, chương trình khuyến mãi cho các cơ sở vắng khách.

**Sơ đồ hoạt động (Activity Diagram)**  
![][image24]

###### *Hình 3.25* Sơ đồ hoạt động Quản lý báo cáo thống kê {#hình-3.25-sơ-đồ-hoạt-động-quản-lý-báo-cáo-thống-kê}

##### **13\. Use Case 13 \- Quản lý người dùng**

![][image25]

###### *Hình 3.26* Use Case 13 \- Quản lý người dùng {#hình-3.26-use-case-13---quản-lý-người-dùng}

- **Tác nhân chính:** Quản lý  
- **Mục đích:** Thực hiện cấp phát mới quyền đăng nhập, đổi pass, gán quyền phụ trách nhân sự theo từng Cơ sở hoặc thu hồi/khóa tài khoản nhân viên.  
- **Điều kiện tiên quyết:** Đăng nhập vào hệ thống dưới dưới quyền Super Admin / Quản lý trạm.  
- **Luồng sự kiện chính (Main Flow):**  
  * Actor: Truy cập module Quản lý người dùng.  
  * Hệ thống: Reander danh sách tài khoản Nhân sự.  
  * Actor: Khởi tạo một tài khoản (User mới), gán quyền (Role) và gán thuộc "Cơ sở nào", hoặc nhấn khóa một tài khoản hiện có làm sai quy tắc.  
  * Hệ thống: Cập nhật bảng NGUOI\_DUNG.  
- **Hậu điều kiện:** Cấu hình truy cập hệ thống bắt đầu có hiệu lực ngay lập tức.

**Sơ đồ hoạt động (Activity Diagram)**  
![][image26]

###### *Hình 3.27* Sơ đồ hoạt động Quản lý người dùng {#hình-3.27-sơ-đồ-hoạt-động-quản-lý-người-dùng}

##### **14\. Use Case 14 – Quản lý sân**

![][image27]

###### *Hình 3.28* Use Case 14 – Quản lý sân {#hình-3.28-use-case-14-–-quản-lý-sân}

- **Tác nhân chính:** Quản lý  
- **Mục đích:** Cho phép Quản lý thêm mới, sửa đổi thông tin (tên sân, loại sân, giá thuê) hoặc cập nhật trạng thái (bảo trì, tạm ngưng) của các sân bóng tại cơ sở.  
- **Điều kiện tiên quyết:** Quản lý đã đăng nhập vào hệ thống bằng tài khoản quyền cao.  
- **Luồng sự kiện chính (Main Flow \- Thêm/Cập nhật sân):**  
  * Actor: Quản lý chọn chức năng "Quản lý thông tin sân" trên giao diện Admin.  
  * Hệ thống: Hiển thị danh sách các sân bóng hiện có thuộc cơ sở.  
  * Actor: Quản lý thao tác thêm sân mới hoặc chọn một sân để sửa đổi/chuyển trạng thái bảo trì.  
  * Hệ thống: Kiểm tra tính hợp lệ của dữ liệu (Tên chưa trùng lặp, Giá trị mức thuê hợp lệ).  
  * Hệ thống: Cập nhật thông tin sân (SAN\_BONG) vào CSDL.  
  * Hệ thống: Hiển thị thông báo thành công và làm mới danh sách hiển thị.  
- **Hậu điều kiện:** Dữ liệu sân bóng được cập nhật hiện trạng, ảnh hưởng đồng bộ tới lịch trống để khách hàng đặt sân.

**Sơ đồ hoạt động (Activity Diagram)**  
![][image28]

###### *Hình 3.29* Sơ đồ hoạt động Quản lý sân {#hình-3.29-sơ-đồ-hoạt-động-quản-lý-sân}

##### **15\. Use Case 15 – Quản lý dịch vụ**

![][image29]

###### *Hình 3.30* Use Case 15 – Quản lý dịch vụ {#hình-3.30-use-case-15-–-quản-lý-dịch-vụ}

- **Tác nhân chính:** Quản lý  
- **Mục đích:** Quản lý danh mục các dịch vụ phụ trợ (đồ uống, thuê áo bíp, thuê bóng, đồ ăn nhẹ), cấu hình lại giá bán hoặc cập nhật tình trạng tồn kho để nhân viên thực hiện thêm vào hóa đơn khách hàng.  
- **Điều kiện tiên quyết:** Quản lý đã đăng nhập thành công vào hệ thống admin.  
- **Luồng sự kiện chính (Main Flow \- Thêm/Cập nhật dịch vụ):**  
  * Actor: Quản lý truy cập module "Quản lý dịch vụ" trên menu hệ thống.  
  * Hệ thống: Hiển thị danh sách các dịch vụ hiện hành cùng mức giá và trạng thái (Đang bán/Tạm ngưng).  
  * Actor: Thay đổi giá một dịch vụ đang có hoặc bấm "Thêm dịch vụ mới" (nhập tên, giá tiền, hình ảnh minh họa nếu có).  
  * Hệ thống: Kiểm tra tính hợp lệ của dữ liệu đầu vào.  
  * Hệ thống: Lưu cập nhật vào thiết kế bảng DICH\_VU trong CSDL.  
  * Hệ thống: Tải lại giao diện danh sách dịch vụ và hiển thị thông báo "Cập nhật thành công".  
- **Hậu điều kiện:** Dữ liệu dịch vụ mới được đồng bộ hóa tức thì tới thiết bị/giao diện bán hàng của nhân viên tại quầy.

**Sơ đồ hoạt động (Activity Diagram)**  
![][image30]

###### *Hình 3.31 Sơ đồ hoạt động* *Quản lý dịch vụ* {#hình-3.31-sơ-đồ-hoạt-động-quản-lý-dịch-vụ}

### **3.2.2. Mô hình hóa cấu trúc** {#3.2.2.-mô-hình-hóa-cấu-trúc}

#### **3.2.2.1. Danh sách các lớp đối tượng**

| STT | Tên lớp | Ý nghĩa / Ghi chú |
| :---- | :---- | :---- |
| 1 | NguoiDung | Lớp cha trừu tượng quản lý thông tin định danh và tài khoản chung của tất cả người dùng. |
| 2 | KhachHang | Kế thừa từ NguoiDung, đại diện khách hàng đặt sân, quản lý điểm tích lũy. |
| 3 | NhanVien | Kế thừa từ NguoiDung, đại diện cho nhân sự trực sân tại cơ sở. |
| 4 | QuanLy | Kế thừa từ NguoiDung, có quyền giám sát, thống kê và cấu hình hệ thống. |
| 5 | CoSo | Đại diện cho một chi nhánh sân bóng trong mạng lưới. |
| 6 | SanBong | Một sân bóng cụ thể thuộc quyền quản lý của một Cơ sở. |
| 7 | DonDatSan | Lưu trữ thông tin một phiên đặt sân của khách hàng đối với một sân cụ thể ở một khung giờ. |
| 8 | HoaDon | Lưu trữ thông tin thanh toán cuối ca cho đơn đặt sân và dịch vụ. |
| 9 | ChiTietHoaDon | Theo dõi các dịch vụ phát sinh (nước, áo, bóng) trong một hóa đơn. |
| 10 | DichVu | Danh mục hàng hóa và dịch vụ phụ trợ hiện có. |
| 11 | KhuyenMai | Quản lý các voucher giảm giá được áp dụng. |

##### Bảng 3.5 Bảng Danh sách các lớp đối tượng {#bảng-3.5-bảng-danh-sách-các-lớp-đối-tượng}

#### **3.2.2.2. Mô tả chi tiết các lớp đối tượng**

| NguoiDung |  |  |  |
| ----- | :---- | ----- | ----- |
| **1** | **Attribute** | **Tên biến** | **Ý nghĩa** |
|  |  | \- id: int \- hoTen: String \- soDienThoai: String \- email: String \- matKhau: String \- vaiTro: String | \- Mã định danh duy nhất \- Họ và tên đầy đủ \- Số điện thoại đăng nhập \- Địa chỉ email liên hệ \- Mật khẩu (đã mã hóa) \- Quyền truy cập |
|  | **Operation** | **Tên hàm** | **Ý nghĩa** |
|  |  | \+ dangNhap(): void \+ capNhatThongTin(): void | \+ Đăng nhập vào hệ thống \+ Cập nhật thông tin cá nhân  |
| **KhachHang** |  |  |  |
| **2** | **Attribute** | **Tên biến** | **Ý nghĩa** |
|  |  | \- diemTichLuy: int | \- Điểm tích lũy từ các lần đặt sân |
|  | **Operation** | **Tên hàm** | **Ý nghĩa** |
|  |  | \+ datSan(): void \+ huyDatSan(): void \+ xemLichSu(): void | \+ Thực hiện đặt sân \+ Hủy đơn đặt sân \+ Xem lịch sử đặt sân |
| **NhanVien** |  |  |  |
| **3** | **Attribute** | **Tên biến** | **Ý nghĩa** |
|  |  | \- caLamViec: String | \- Ca làm việc được phân công |
|  | **Operation** | **Tên hàm** | **Ý nghĩa** |
|  |  | \+ duyetDon(): void \+ checkIn(): void \+ thanhToan(): void | \+ Duyệt đơn đặt sân \+ Xác nhận Check-in nhận sân \+ Xử lý thanh toán hóa đơn |
| **QuanLy** |  |  |  |
| **4** | **Attribute** | **Tên biến** | **Ý nghĩa** |
|  |  | (Không có) | (Không có) |
|  | **Operation** | **Tên hàm** | **Ý nghĩa** |
|  |  | \+ xemBaoCao(): void \+ quanLyNhanVien(): void \+ quanLyCoSo(): void  | \+ Xem báo cáo thống kê \+ Quản lý danh sách nhân sự \+ Quản lý thông tin các cơ sở  |
| **CoSo** |  |  |  |
| **5** | **Attribute** | **Tên biến** | **Ý nghĩa** |
|  |  | \- id: int \- tenCoSo: String \- diaChi: String \- hotline: String | \- Mã định danh cơ sở \- Tên gọi của cơ sở sân bóng \- Địa chỉ chi tiết \- Số điện thoại liên hệ |
|  | **Operation** | **Tên hàm** | **Ý nghĩa** |
|  |  | \+ themSan(): void \+ thongKeDoanhThu(): void | \+ Thêm sân bóng mới vào cơ sở \+ Thống kê doanh thu theo cơ sở  |
| **SanBong** |  |  |  |
| **6** | **Attribute** | **Tên biến** | **Ý nghĩa** |
|  |  | \- id: int \- tenSan: String \- loaiSan: int \- khungGia: double \- trangThai: String | \- Mã định danh sân bóng \- Tên định danh sân (Vd: Sân A1) \- Kích thước sân (5, 7, 11 người) \- Giá thuê cơ bản mỗi giờ \- Trạng thái hiện tại của sân |
|  | **Operation** | **Tên hàm** | **Ý nghĩa** |
|  |  | \+ capNhatTrangThai(): void  | \+ Cập nhật lại trạng thái sân  |
| **DonDatSan** |  |  |  |
| **7** | **Attribute** | **Tên biến** | **Ý nghĩa** |
|  |  | \- id: int \- thoiGianDat: DateTime \- thoiGianBatDau: DateTime \- thoiGianKetThuc: DateTime \- trangThai: String \- ghiChu: String | \- Mã định danh đơn đặt sân \- Thời điểm khách tạo đơn \- Mốc thời gian bắt đầu đá \- Mốc thời gian kết thúc đá \- Trạng thái đơn đặt sân \- Ghi chú thêm từ khách/nhân viên |
|  | **Operation** | **Tên hàm** | **Ý nghĩa** |
|  |  | \+ kiemTraHopLe(): boolean \+ chuyenTrangThai(): void  | \+ Kiểm tra tính hợp lệ của đơn \+ Cập nhật trạng thái của đơn  |
| **HoaDon** |  |  |  |
| **8** | **Attribute** | **Tên biến** | **Ý nghĩa** |
|  |  | \- id: int \- ngayLap: DateTime \- tongTien: double \- phuPhi: double \- phuongThucThanhToan: String \- trangThai: String | \- Mã định danh hóa đơn \- Thời gian lập/xuất hóa đơn \- Tổng tiền phải thanh toán \- Tiền phụ phí phát sinh thêm \- Hình thức thanh toán \- Trạng thái thanh toán |
|  | **Operation** | **Tên hàm** | **Ý nghĩa** |
|  |  | \+ tinhTongTien(): double \+ xuatHoaDon(): void  | \+ Tính toán tổng số tiền \+ Xuất biên lai hóa đơn  |
| **ChiTietHoaDon** |  |  |  |
| **9** | **Attribute** | **Tên biến** | **Ý nghĩa** |
|  |  | \- id: int \- soLuong: int \- donGia: double \- thanhTien: double | \- Mã định danh dòng chi tiết \- Số lượng dịch vụ sử dụng \- Đơn giá tại thời điểm mua \- Thành tiền (số lượng \* đơn giá) |
|  | **Operation** | **Tên hàm** | **Ý nghĩa** |
|  |  | \+ tinhThanhTien(): double | \+ Xử lý tính thành tiền  |
| **DichVu** |  |  |  |
| **10** | **Attribute** | **Tên biến** | **Ý nghĩa** |
|  |  | \- id: int \- tenDichVu: String \- donGia: double \- tonKho: int | \- Mã định danh dịch vụ \- Tên dịch vụ (Nước, áo...) \- Giá bán/thuê dịch vụ \- Số lượng tồn kho hiện tại |
|  | **Operation** | **Tên hàm** | **Ý nghĩa** |
|  |  | \+ capNhatTonKho(): void | \+ Cập nhật lại số lượng tồn kho  |
| **KhuyenMai** |  |  |  |
| **11** | **Attribute** | **Tên biến** | **Ý nghĩa** |
|  |  | \- id: int \- maKM: String \- moTa: String \- phanTramGiam: float \- toiDa: double \- ngayBatDau: DateTime \- ngayKetThuc: DateTime \- trangThai: String | \- Mã định danh chương trình \- Mã code áp dụng \- Thông tin mô tả chi tiết \- Tỷ lệ % giảm giá \- Mức giảm tối đa (VND) \- Thời điểm bắt đầu áp dụng \- Thời điểm kết thúc áp dụng \- Tình trạng chương trình |
|  | **Operation** | **Tên biến** | **Ý nghĩa** |
|  |  | \+ kiemTraThoiHan(): boolean  | \+ Kiểm tra hiệu lực của mã  |

##### Bảng 3.6 Bảng mô tả chi tiết các lớp đối tượng {#bảng-3.6-bảng-mô-tả-chi-tiết-các-lớp-đối-tượng}

#### **3.2.2.3. Danh sách các mối quan hệ**

| STT | Tên quan hệ | Lớp A | Lớp B | Loại quan hệ | Ý nghĩa |
| :---- | :---- | :---- | :---- | :---- | :---- |
| 1 | Kế thừa | NguoiDung | KhachHang, NhanVien, QuanLy | Kế thừa | Các vai trò kế thừa thuộc tính định danh từ người dùng. |
| 2 | Bao gồm | CoSo | SanBong | 1..n (Composition) | Một cơ sở sở hữu nhiều sân bóng. Nếu cơ sở đóng cửa thì sân biến mất. |
| 3 | Quản lý | CoSo | NhanVien | 1..n (Composition) | Mỗi nhân viên làm việc cố định tại một cơ sở. |
| 4 | Đặt sân | KhachHang | DonDatSan | 1..n (Association) | Khách hàng tạo nhiều đơn đặt sân trên hệ thống. |
| 5 | Thuộc về | SanBong | DonDatSan | 1..n (Association) | Một sân bóng tiếp nhận nhiều đơn đặt sân. |
| 6 | Áp dụng | KhuyenMai | DonDatSan | 1..n (Association) | Một khuyến mãi áp dụng cho nhiều đơn thỏa mãn điều kiện. |
| 7 | Sinh ra | DonDatSan | HoaDon | 1..1 (Association) | Mỗi đơn đặt sân ánh xạ 1-1 với hóa đơn thanh toán cuối ca. |
| 8 | Lập HĐ | NhanVien | HoaDon | 1..n (Association) | Nhân viên xác nhận hóa đơn. |
| 9 | Gồm | HoaDon | ChiTietHoaDon | 1..n (Composition) | Hóa đơn gồm nhiều dòng bán nước, phụ phí. |
| 10 | Chi tiết | DichVu | ChiTietHoaDon | 1..n (Association) | Một dịch vụ có mặt trong nhiều hóa đơn. |

##### Bảng 3.7 Bảng Danh sách các mối quan hệ {#bảng-3.7-bảng-danh-sách-các-mối-quan-hệ}

### **3.2.3. Mô hình hóa hành vi** {#3.2.3.-mô-hình-hóa-hành-vi}

Phần này đặc tả trình tự tương tác giữa các đối tượng trong hệ thống theo trật tự thời gian (Sequence Diagram) để hoàn thành các luồng nghiệp vụ tiêu biểu đã mô tả ở trên.

#### **1\. Sơ đồ tuần tự Use Case 1 – Đăng nhập**

*![][image31]*

###### *Hình 3.32* Sơ đồ tuần tự Use Case 1 – Đăng nhập {#hình-3.32-sơ-đồ-tuần-tự-use-case-1-–-đăng-nhập}

**Các đối tượng (Lifelines):** Người dùng (Actor), Giao diện Đăng nhập (View), Xác thực Controller (Controller), Người dùng (Entity), CSDL.

#### **2\. Sơ đồ tuần tự Use Case 2 – Đăng ký**

*![][image32]*

###### *Hình 3.33* Sơ đồ tuần tự Use Case 2 – Đăng ký {#hình-3.33-sơ-đồ-tuần-tự-use-case-2-–-đăng-ký}

**Các đối tượng (Lifelines):** Khách hàng (Actor), Giao diện Đăng ký (View), Xác thực Controller (Controller), Khách hàng (Entity), CSDL.

#### **3\. Sơ đồ tuần tự Use Case 3 – Tra cứu lịch sân**

*![][image33]*

###### *Hình 3.34* Sơ đồ tuần tự Use Case 3 – Tra cứu lịch sân {#hình-3.34-sơ-đồ-tuần-tự-use-case-3-–-tra-cứu-lịch-sân}

**Các đối tượng (Lifelines):** Khách hàng (Actor), Giao diện Tra cứu (View), Lịch sân Controller (Controller), Sân bóng (Entity), CSDL.

#### **4\. Sơ đồ tuần tự Use Case 4 – Đặt sân**

*![][image34]*

###### *Hình 3.35* Sơ đồ tuần tự Use Case 4 – Đặt sân {#hình-3.35-sơ-đồ-tuần-tự-use-case-4-–-đặt-sân}

**Các đối tượng (Lifelines):** Khách hàng (Actor), Giao diện Đặt sân (View), Đơn đặt Controller (Controller), Đơn đặt sân (Entity), Sân bóng (Entity), CSDL.

#### **5\. Sơ đồ tuần tự Use Case 5 – Theo dõi lịch sử đặt sân**

*![][image35]*

###### *Hình 3.36* Sơ đồ tuần tự Use Case 5 – Theo dõi lịch sử đặt sân {#hình-3.36-sơ-đồ-tuần-tự-use-case-5-–-theo-dõi-lịch-sử-đặt-sân}

**Các đối tượng (Lifelines):** Khách hàng (Actor), Giao diện Lịch sử (View), Đơn đặt Controller (Controller), Đơn đặt sân (Entity), CSDL.

#### **6\. Sơ đồ tuần tự Use Case 6 – Thanh toán**

![][image36]

###### *Hình 3.37* Sơ đồ tuần tự Use Case 6 – Thanh toán {#hình-3.37-sơ-đồ-tuần-tự-use-case-6-–-thanh-toán}

**Các đối tượng (Lifelines):** Khách hàng/Nhân viên (Actor), Giao diện Thanh toán (View), Thanh toán Controller (Controller), Hóa đơn (Entity), CSDL, Cổng thanh toán (External System).

#### **7\. Sơ đồ tuần tự Use Case 7 – Quản lý đơn đặt sân**

*![][image37]*

###### *Hình 3.38* Sơ đồ tuần tự Use Case 7 – Quản lý đơn đặt sân {#hình-3.38-sơ-đồ-tuần-tự-use-case-7-–-quản-lý-đơn-đặt-sân}

**Các đối tượng (Lifelines):** Quản lý/Nhân viên (Actor), Giao diện Quản lý đơn (View), Đơn đặt Controller (Controller), Đơn đặt sân (Entity), CSDL.

#### **8\. Sơ đồ tuần tự Use Case 8 – Check-in nhận sân**

*![][image38]*

**Các đối tượng (Lifelines):** Quản lý/Nhân viên (Actor), Giao diện Check-in (View), Đơn đặt Controller (Controller), Đơn đặt sân (Entity), Sân bóng (Entity), CSDL.

#### **9\. Sơ đồ tuần tự Use Case 9 – Quản lý tài khoản cá nhân**

*![][image39]*

###### *Hình 3.39* Sơ đồ tuần tự Use Case 9 – Quản lý tài khoản cá nhân {#hình-3.39-sơ-đồ-tuần-tự-use-case-9-–-quản-lý-tài-khoản-cá-nhân}

**Các đối tượng (Lifelines):** Người dùng (Actor), Giao diện Hồ sơ (View), Tài khoản Controller (Controller), Người dùng (Entity), CSDL.

#### **10\. Sơ đồ tuần tự Use Case 10 – Quản lý kho**

*![][image40]*

###### *Hình 3.40* Sơ đồ tuần tự Use Case 10 – Quản lý kho {#hình-3.40-sơ-đồ-tuần-tự-use-case-10-–-quản-lý-kho}

**Các đối tượng (Lifelines):** Quản lý/Nhân viên (Actor), Giao diện Quản lý kho (View), Kho Controller (Controller), Vật tư (Entity), CSDL.

#### **11\. Sơ đồ tuần tự Use Case 11 – Quản lý khuyến mãi**

*![][image41]*

###### *Hình 3.41* Sơ đồ tuần tự Use Case 11 – Quản lý khuyến mãi {#hình-3.41-sơ-đồ-tuần-tự-use-case-11-–-quản-lý-khuyến-mãi}

**Các đối tượng (Lifelines):** Quản lý (Actor), Giao diện Khuyến mãi (View), Khuyến mãi Controller (Controller), Khuyến mãi (Entity), CSDL.

#### **12\. Sơ đồ tuần tự Use Case 12 – Quản lý báo cáo thống kê**

*![][image42]*

###### *Hình 3.42* Sơ đồ tuần tự Use Case 12 – Quản lý báo cáo thống kê {#hình-3.42-sơ-đồ-tuần-tự-use-case-12-–-quản-lý-báo-cáo-thống-kê}

**Các đối tượng (Lifelines):** Quản lý (Actor), Giao diện Báo cáo (View), Thống kê Controller (Controller), Doanh thu (Entity), CSDL.

#### **13\. Sơ đồ tuần tự Use Case 13 – Quản lý người dùng**

*![][image43]*

###### *Hình 3.43* Sơ đồ tuần tự Use Case 13 – Quản lý người dùng {#hình-3.43-sơ-đồ-tuần-tự-use-case-13-–-quản-lý-người-dùng}

**Các đối tượng (Lifelines):** Quản lý (Actor), Giao diện Quản lý người dùng (View), Người dùng Controller (Controller), Người dùng (Entity), CSDL.

#### **14\. Sơ đồ tuần tự Use Case 14 – Quản lý sân**

*![][image44]*

###### *Hình 3.44* Sơ đồ tuần tự Use Case 14 – Quản lý sân {#hình-3.44-sơ-đồ-tuần-tự-use-case-14-–-quản-lý-sân}

**Các đối tượng (Lifelines):** Quản lý (Actor), Giao diện Quản lý sân (View), Sân bóng Controller (Controller), Sân bóng (Entity), CSDL.

#### **15\. Sơ đồ tuần tự Use Case 15 – Quản lý dịch vụ**

*![][image45]*

###### *Hình 3.45* Sơ đồ tuần tự Use Case 15 – Quản lý dịch vụ {#hình-3.45-sơ-đồ-tuần-tự-use-case-15-–-quản-lý-dịch-vụ}

**Các đối tượng (Lifelines):** Quản lý (Actor), Giao diện Quản lý dịch vụ (View), Dịch vụ Controller (Controller), Dịch vụ (Entity), CSDL.

### **3.2.4. Mô hình hóa dữ liệu** {#3.2.4.-mô-hình-hóa-dữ-liệu}

Phần này trình bày Mô hình dữ liệu ở mức quan niệm sử dụng Sơ đồ Thực thể \- Kết hợp (ERD) để biểu diễn các tập thực thể và mối quan hệ giữa chúng trong hệ thống.

####  **3.2.4.1. Sơ đồ Thực thể Liên kết (ERD)**

###### *Hình 3.46* Sơ đồ Thực thể Liên kết (ERD) {#hình-3.46-sơ-đồ-thực-thể-liên-kết-(erd)}

#### **3.2.4.2. Danh mục thực thể và mối kết hợp**

##### **a) Danh mục thực thể**

| STT | Tên thực thể | Mô tả | Các thuộc tính |
| :---- | :---- | :---- | :---- |
| 1 | **KHACH\_HANG** | Đại diện cho người dùng cuối đặt sân bóng qua hệ thống. | **Thuộc tính khóa:** id\_kh (định danh duy nhất khách hàng). **Thuộc tính đơn trị:** ho\_ten, sdt, email, mat\_khau, diem\_tich\_luy. |
| 2 | **NHAN\_VIEN** | Nhân sự trực sân tại cơ sở; xử lý đơn đặt, check-in và lập hóa đơn. | **Thuộc tính khóa:** id\_nv. **Thuộc tính đơn trị:** ho\_ten, sdt, email, mat\_khau, ca\_lam\_viec (ca Sáng/Chiều/Tối). |
| 3 | **QUAN\_LY** | Chủ sân hoặc quản lý chuỗi cơ sở; có quyền cấu hình hệ thống và xem báo cáo. | **Thuộc tính khóa:** id\_ql. **Thuộc tính đơn trị:** ho\_ten, sdt, email, mat\_khau. |
| 4 | **CO\_SO** | Một chi nhánh sân bóng trong mạng lưới; có thể quản lý nhiều sân và nhân viên. | **Thuộc tính khóa:** id\_coso. **Thuộc tính đơn trị:** ten\_co\_so, dia\_chi, hotline. |
| 5 | **SAN\_BONG** | Một sân bóng cụ thể thuộc cơ sở; có loại, giá thuê và trạng thái hoạt động. | **Thuộc tính khóa:** id\_san. **Thuộc tính đơn trị:** ten\_san, loai\_san (5/7/11 người), gia\_thue (giá mỗi giờ), trang\_thai (Trống / Đã đặt / Bảo trì). |
| 6 | **KHUYEN\_MAI** | Voucher giảm giá có thời hạn, áp dụng cho đơn đặt sân thỏa điều kiện. | **Thuộc tính khóa:** id\_km. **Thuộc tính đơn trị:** ma\_km, mo\_ta, phan\_tram\_giam, giam\_toi\_da, ngay\_bat\_dau, ngay\_ket\_thuc, trang\_thai (Đang hoạt động / Hết hạn). |
| 7 | **DON\_DAT\_SAN** | Ghi nhận một phiên đặt sân: liên kết khách hàng – sân – khung giờ. | **Thuộc tính khóa:** id\_don. **Thuộc tính đơn trị:** thoi\_gian\_dat, thoi\_gian\_bat\_dau, thoi\_gian\_ket\_thuc, trang\_thai (Chờ xác nhận / Đã check-in / Đã hủy / Hoàn thành), ghi\_chu. |
| 8 | **HOA\_DON** | Hóa đơn tính tiền cuối ca, sinh ra từ đơn đặt sân đã hoàn thành. | **Thuộc tính khóa:** id\_hd. **Thuộc tính đơn trị:** ngay\_lap, tong\_tien, phu\_phi (phụ phí lấn giờ), pt\_thanh\_toan (Tiền mặt / Chuyển khoản), trang\_thai (Chờ thanh toán / Đã thanh toán). |
| 9 | **DICH\_VU** | Danh mục hàng hóa và dịch vụ phụ trợ tại quầy (nước, thuê áo, thuê bóng…). | **Thuộc tính khóa:** id\_dv. **Thuộc tính đơn trị:** ten\_dich\_vu, don\_gia, ton\_kho. |
| 10 | **CHI\_TIET\_HOA\_DON** | Thực thể kết hợp ghi chi tiết từng dịch vụ phát sinh trong một hóa đơn. | **Thuộc tính khóa:** id\_chi\_tiet. **Thuộc tính đơn trị:** so\_luong, don\_gia (giá tại thời điểm mua), thanh\_tien (thành tiền \= số lượng × đơn giá). |

##### Bảng 3.8 Danh mục thực thể {#bảng-3.8-danh-mục-thực-thể}

##### **b) Danh mục các mối kết hợp**

| STT | Tên mối kết hợp | Các thực thể tham gia | Bản số | Diễn giải |
| :---- | :---- | :---- | :---- | :---- |
| 1 | **Có** (sân) | CO\_SO – SAN\_BONG | 1 : N | Một cơ sở sở hữu một hoặc nhiều sân bóng; mỗi sân chỉ thuộc về một cơ sở duy nhất. |
| 2 | **Quản lý** (nhân viên) | CO\_SO – NHAN\_VIEN | 1 : N | Một cơ sở quản lý một hoặc nhiều nhân viên; mỗi nhân viên được gắn với một cơ sở cụ thể. |
| 3 | **Cung cấp** (dịch vụ) | CO\_SO – DICH\_VU | 1 : N | Một cơ sở cung cấp một hoặc nhiều dịch vụ phụ trợ tại quầy. |
| 4 | **Đặt** | KHACH\_HANG – DON\_DAT\_SAN | 1 : N | Một khách hàng có thể tạo nhiều đơn đặt sân; mỗi đơn chỉ thuộc về một khách hàng. |
| 5 | **Bị đặt** | SAN\_BONG – DON\_DAT\_SAN | 1 : N | Một sân bóng có thể xuất hiện trong nhiều đơn đặt sân (ở các thời điểm khác nhau); mỗi đơn gắn với một sân cụ thể. |
| 6 | **Áp dụng** | KHUYEN\_MAI – DON\_DAT\_SAN | 1 : N | Một mã khuyến mãi có thể được áp dụng cho nhiều đơn đặt sân thỏa điều kiện; mỗi đơn chỉ áp dụng tối đa một mã. |
| 7 | **Trả tiền qua** | DON\_DAT\_SAN – HOA\_DON | 1 : 1 | Mỗi đơn đặt sân khi hoàn thành sẽ sinh ra đúng một hóa đơn thanh toán. |
| 8 | **Lập** | NHAN\_VIEN – HOA\_DON | 1 : N | Một nhân viên có thể lập nhiều hóa đơn; mỗi hóa đơn được lập bởi một nhân viên xác nhận. |
| 9 | **Bao gồm** | HOA\_DON – CHI\_TIET\_HOA\_DON | 1 : N | Một hóa đơn bao gồm một hoặc nhiều dòng chi tiết dịch vụ phát sinh. |
| 10 | **Được mua trong** | DICH\_VU – CHI\_TIET\_HOA\_DON | 1 : N | Một dịch vụ có thể xuất hiện trong nhiều dòng chi tiết hóa đơn khác nhau. |

##### Bảng 3.9 Danh mục các mối kết hợp {#bảng-3.9-danh-mục-các-mối-kết-hợp}

## **3.3 Thiết kế hệ thống** {#3.3-thiết-kế-hệ-thống}

### **3.3.1. Thiết kế lớp (chuyển đổi từ sơ đồ lớp mức phân tích sang mức thiết kế)** {#3.3.1.-thiết-kế-lớp-(chuyển-đổi-từ-sơ-đồ-lớp-mức-phân-tích-sang-mức-thiết-kế)}

Sơ đồ lớp mô tả cấu trúc tĩnh của hệ thống. Khác với mức phân tích (chỉ tập trung vào khái niệm), thiết kế lớp ở mức này được chi tiết hóa để lập trình viên có thể viết code: xác định rõ kiểu dữ liệu, phạm vi truy cập và đầy đủ các phương thức nghiệp vụ dựa trên Sequence Diagram đã phân tích.

#### **3.3.1.1. Sơ đồ lớp mức thiết kế (Class Diagram)**

###### *Hình 3.47* Sơ đồ lớp mức thiết kế (Class Diagram) {#hình-3.47-sơ-đồ-lớp-mức-thiết-kế-(class-diagram)}

#### **3.3.1.2. Bảng mô tả chi tiết các lớp**

##### **Lớp NguoiDung (Lớp cha trừu tượng)**

| Thành phần | Tên | Kiểu dữ liệu | Phạm vi | Mô tả |
| :---- | :---- | :---- | :---- | :---- |
| Thuộc tính | id | int | \# Protected | Mã định danh duy nhất tự tăng. |
| Thuộc tính | hoTen | String | \# Protected | Họ và tên đầy đủ. |
| Thuộc tính | soDienThoai | String | \# Protected | SĐT, dùng làm tên đăng nhập. |
| Thuộc tính | email | String | \# Protected | Địa chỉ email. |
| Thuộc tính | matKhau | String | \# Protected | Mật khẩu đã mã hóa (bcrypt). |
| Thuộc tính | vaiTro | String | \# Protected | Phân quyền: KhachHang, NhanVien, QuanLy. |
| Thuộc tính | ngayTao | DateTime | \# Protected | Ngày khởi tạo tài khoản. |
| Phương thức | dangNhap() | Boolean | \+ Public | Xác thực thông tin đăng nhập. |
| Phương thức | dangXuat() | void | \+ Public | Hủy phiên làm việc. |
| Phương thức | capNhatThongTin() | Boolean | \+ Public | Cập nhật họ tên, số điện thoại. |
| Phương thức | doiMatKhau() | Boolean | \+ Public | Đổi mật khẩu sau khi xác thực mật khẩu cũ. |

##### **Lớp KhachHang**

| Thành phần | Tên | Kiểu dữ liệu | Phạm vi | Mô tả |
| :---- | :---- | :---- | :---- | :---- |
| Thuộc tính | diemTichLuy | int | \- Private | Tổng điểm thưởng tích lũy từ các lần đặt sân. |
| Phương thức | datSan() | DonDatSan | \+ Public | Tạo đơn đặt sân mới, trả về đối tượng DonDatSan. |
| Phương thức | huyDatSan() | Boolean | \+ Public | Hủy đơn đặt sân nếu còn trong thời gian cho phép. |
| Phương thức | xemLichSuDatSan() | List\<DonDatSan\> | \+ Public | Lấy danh sách toàn bộ đơn đặt sân theo ID khách. |
| Phương thức | apDungKhuyenMai() | Boolean | \+ Public | Kiểm tra và gắn mã KM vào đơn đặt sân. |
| Phương thức | danhGiaDichVu() | Boolean | \+ Public | Gửi đánh giá sao và nhận xét sau khi hoàn thành ca. |

##### **Lớp NhanVien**

| Thành phần | Tên | Kiểu dữ liệu | Phạm vi | Mô tả |
| :---- | :---- | :---- | :---- | :---- |
| Thuộc tính | caLamViec | String | \- Private | Ca trực: Sáng, Chiều, Tối. |
| Thuộc tính | idCoSo | int | \- Private | Mã cơ sở nhân viên được phân công. |
| Phương thức | duyetDonDat() | Boolean | \+ Public | Xác nhận đơn đặt sân của khách hàng online. |
| Phương thức | taoMoiDon() | DonDatSan | \+ Public | Tạo đơn đặt sân trực tiếp cho khách vãng lai. |
| Phương thức | doiGioDon() | Boolean | \+ Public | Dời khung giờ đặt sân khi còn chỗ trống. |
| Phương thức | huyDonHoKhach() | Boolean | \+ Public | Hủy đơn có lý do, gửi thông báo cho khách. |
| Phương thức | checkIn() | Boolean | \+ Public | Xác nhận khách đến sân, cập nhật trạng thái đơn. |
| Phương thức | lapHoaDon() | HoaDon | \+ Public | Tạo hóa đơn từ đơn đặt sân, tính tổng tiền. |
| Phương thức | xacNhanThanhToan() | Boolean | \+ Public | Xác nhận thanh toán thành công, cập nhật trạng thái. |
| Phương thức | capNhatTonKho() | Boolean | \+ Public | Nhập/xuất kho dịch vụ phụ trợ. |

##### **Lớp QuanLy**

| Thành phần | Tên | Kiểu dữ liệu | Phạm vi | Mô tả |
| :---- | :---- | :---- | :---- | :---- |
| Phương thức | xemBaoCaoDoanhThu() | BaoCao | \+ Public | Tổng hợp doanh thu theo khoảng thời gian và cơ sở. |
| Phương thức | capPhatTaiKhoan() | NhanVien | \+ Public | Tạo tài khoản nhân viên mới, gán vào cơ sở. |
| Phương thức | khoaTaiKhoan() | Boolean | \+ Public | Vô hiệu hóa tài khoản vi phạm. |
| Phương thức | taoKhuyenMai() | KhuyenMai | \+ Public | Tạo chiến dịch mã giảm giá mới. |
| Phương thức | xuatBaoCaoPDF() | File | \+ Public | Xuất báo cáo dưới dạng file PDF/Excel. |

##### **Lớp SanBong**

| Thành phần | Tên | Kiểu dữ liệu | Phạm vi | Mô tả |
| :---- | :---- | :---- | :---- | :---- |
| Thuộc tính | id | int | \- Private | Mã sân bóng, khóa chính. |
| Thuộc tính | tenSan | String | \- Private | Tên định danh sân (VD: Sân A1, Sân B2). |
| Thuộc tính | loaiSan | int | \- Private | Loại sân: 5, 7 hoặc 11 người. |
| Thuộc tính | giaThueCoBan | double | \- Private | Giá thuê giờ thường (đồng/giờ). |
| Thuộc tính | giaThueGioVang | double | \- Private | Giá thuê giờ vàng (đồng/giờ). |
| Thuộc tính | trangThai | String | \- Private | Trạng thái: Trống, Đã đặt, Đang sử dụng, Bảo trì. |
| Phương thức | kiemTraTrong() | Boolean | \+ Public | Kiểm tra sân có trống trong khung giờ chỉ định. |
| Phương thức | tinhGiaThue() | double | \+ Public | Tính tiền thuê dựa vào khung giờ (thường/vàng). |
| Phương thức | layLichTheoNgay() | List\<KhungGio\> | \+ Public | Trả về lịch đặt sân theo ngày cụ thể. |

##### **Lớp DonDatSan**

| Thành phần | Tên | Kiểu dữ liệu | Phạm vi | Mô tả |
| :---- | :---- | :---- | :---- | :---- |
| Thuộc tính | id | int | \- Private | Mã đơn đặt sân, khóa chính. |
| Thuộc tính | thoiGianDat | DateTime | \- Private | Thời điểm tạo đơn (ghi log). |
| Thuộc tính | thoiGianBatDau | DateTime | \- Private | Giờ bắt đầu ca chơi. |
| Thuộc tính | thoiGianKetThuc | DateTime | \- Private | Giờ kết thúc ca chơi theo đơn. |
| Thuộc tính | trangThai | String | \- Private | Chờ xác nhận, Đã xác nhận, Đã check-in, Hoàn thành, Đã hủy. |
| Thuộc tính | ghiChu | String | \- Private | Ghi chú thêm từ khách hàng. |
| Phương thức | kiemTraHopLe() | Boolean | \+ Public | Kiểm tra trùng lịch, điều kiện thời gian hợp lệ. |
| Phương thức | chuyenTrangThai() | void | \+ Public | Đổi trạng thái đơn theo luồng nghiệp vụ. |
| Phương thức | kiemTraCoTheThuHuy() | Boolean | \+ Public | Cho phép hủy nếu còn trước giờ bóng lăn theo định mức. |
| Phương thức | taoHoaDon() | HoaDon | \+ Public | Khởi tạo hóa đơn khi ca chơi kết thúc. |

##### **Lớp HoaDon**

| Thành phần | Tên | Kiểu dữ liệu | Phạm vi | Mô tả |
| :---- | :---- | :---- | :---- | :---- |
| Thuộc tính | id | int | \- Private | Mã hóa đơn, khóa chính. |
| Thuộc tính | ngayLap | DateTime | \- Private | Thời điểm lập hóa đơn. |
| Thuộc tính | tongTien | double | \- Private | Tổng tiền sau khi trừ giảm giá. |
| Thuộc tính | phuPhi | double | \- Private | Phụ phí lấn giờ (nếu có). |
| Thuộc tính | soTienGiam | double | \- Private | Số tiền được giảm từ mã khuyến mãi. |
| Thuộc tính | phuongThucThanhToan | String | \- Private | Tiền mặt, Chuyển khoản, Ví điện tử. |
| Thuộc tính | trangThai | String | \- Private | Chờ thanh toán, Đã thanh toán. |
| Phương thức | tinhTongTien() | double | \+ Public | Tổng hợp tiền sân \+ dịch vụ \+ phụ phí − giảm giá. |
| Phương thức | apDungGiamGia() | void | \+ Public | Áp dụng số tiền giảm từ khuyến mãi. |
| Phương thức | xuatHoaDon() | String | \+ Public | Xuất chuỗi HTML/JSON hóa đơn gửi cho khách. |

##### **Lớp KhuyenMai**

| Thành phần | Tên | Kiểu dữ liệu | Phạm vi | Mô tả |
| :---- | :---- | :---- | :---- | :---- |
| Thuộc tính | id | int | \- Private | Mã khuyến mãi, khóa chính. |
| Thuộc tính | maKM | String | \- Private | Chuỗi mã ký tự (VD: SUMMER20). |
| Thuộc tính | phanTramGiam | float | \- Private | Tỷ lệ % giảm giá. |
| Thuộc tính | giaTriGiamToiDa | double | \- Private | Số tiền giảm tối đa (đồng). |
| Thuộc tính | donHangToiThieu | double | \- Private | Giá trị đơn tối thiểu để áp dụng mã. |
| Thuộc tính | soLuotConLai | int | \- Private | Số lượt sử dụng còn lại. |
| Thuộc tính | trangThai | String | \- Private | Đang hoạt động, Hết hạn, Hết lượt. |
| Phương thức | kiemTraHopLe() | Boolean | \+ Public | Kiểm tra mã còn hạn, còn lượt và đơn đủ điều kiện. |
| Phương thức | tinhSoTienGiam() | double | \+ Public | Tính số tiền được giảm thực tế. |
| Phương thức | giamLuotSuDung() | void | \+ Public | Trừ 1 lượt sau khi áp dụng thành công. |

##### Bảng 3.10 Bảng mô tả chi tiết các lớp {#bảng-3.10-bảng-mô-tả-chi-tiết-các-lớp}

### **3.3.2. Thiết kế CSDL (chuyển đổi CSDL từ mức quan niệm sang mức vật lý)** {#3.3.2.-thiết-kế-csdl-(chuyển-đổi-csdl-từ-mức-quan-niệm-sang-mức-vật-lý)}

#### **3.3.2.1. Sơ đồ CSDL mức vật lý**

###### *Hình 3.48* Sơ đồ CSDL mức vật lý {#hình-3.48-sơ-đồ-csdl-mức-vật-lý}

#### **3.3.2.2. Mô tả CSDL**

Bảng dưới đây mô tả chi tiết từng bảng dữ liệu trong hệ thống, bao gồm các trường (cột), kiểu dữ liệu, kích thước và ràng buộc.

| STT | Tên Thực thể | Mô tả  | Khóa chính | Các khóa ngoại liên kết |
| :---- | :---- | :---- | :---- | :---- |
| 1 | KHACH\_HANG | Lưu trữ tài khoản người dùng mua dịch vụ. | id\_kh | Không |
| 2 | NHAN\_VIEN | Tài khoản nhân viên trực sân thuộc các cơ sở. | id\_nv | id\_coso (Bảng CO\_SO) |
| 3 | QUAN\_LY | Tài khoản chủ sân/supervisor. | id\_ql | Không |
| 4 | CO\_SO | Danh mục mạng lưới chi nhánh sân bóng. | id\_coso | Không |
| 5 | SAN\_BONG | Dữ liệu về chất lượng, giá và kích thước sân. | id\_san | id\_coso (Bảng CO\_SO) |
| 6 | KHUYEN\_MAI | Voucher giảm giá có thời hạn sử dụng. | id\_km | Không |
| 7 | DON\_DAT\_SAN | Lưu trữ giờ cao điểm đặt sân của khách. | id\_don | id\_kh, id\_san, id\_km |
| 8 | HOA\_DON | Hóa đơn tính tiền cuối ca cho phiên đặt sân. | id\_hd | id\_don, id\_nv |
| 9 | DICH\_VU | Hàng hóa tại quầy (nước, đồ ăn). | id\_dv | id\_coso (Bảng CO\_SO) |
| 10 | CHI\_TIET\_HOA\_DON | Bảng gắn N-N chi tiết số lượng hàng cho bill. | id\_chi\_tiet | id\_hd, id\_dv |

##### Bảng 3.11 Bảng mô tả chi tiết từng bảng dữ liệu {#bảng-3.11-bảng-mô-tả-chi-tiết-từng-bảng-dữ-liệu}

#### **3.3.2.3. Thiết kế và mô tả các ràng buộc CSDL**

Hệ thống xác định các quy tắc ràng buộc dữ liệu nhằm đảm bảo tính toàn vẹn và chính xác khi dữ liệu được nhập vào.

##### **a) Ràng buộc toàn vẹn thực thể (Entity Integrity – Khóa chính)**

Mọi bảng đều có khóa chính (PK) với ràng buộc NOT NULL và UNIQUE, đảm bảo mỗi bản ghi là duy nhất và có thể nhận diện được.

| STT | Bảng | Khóa chính | Kiểu | Ghi chú |
| :---- | :---- | :---- | :---- | :---- |
| 1 | KHACH\_HANG | id\_kh | INT | AUTO\_INCREMENT, NOT NULL |
| 2 | NHAN\_VIEN | id\_nv | INT | AUTO\_INCREMENT, NOT NULL |
| 3 | QUAN\_LY | id\_ql | INT | AUTO\_INCREMENT, NOT NULL |
| 4 | CO\_SO | id\_coso | INT | AUTO\_INCREMENT, NOT NULL |
| 5 | SAN\_BONG | id\_san | INT | AUTO\_INCREMENT, NOT NULL |
| 6 | KHUYEN\_MAI | id\_km | INT | AUTO\_INCREMENT, NOT NULL |
| 7 | DON\_DAT\_SAN | id\_don | INT | AUTO\_INCREMENT, NOT NULL |
| 8 | HOA\_DON | id\_hd | INT | AUTO\_INCREMENT, NOT NULL |
| 9 | DICH\_VU | id\_dv | INT | AUTO\_INCREMENT, NOT NULL |
| 10 | CHI\_TIET\_HOA\_DON | id\_chi\_tiet | INT | AUTO\_INCREMENT, NOT NULL |

##### Bảng 3.12 Bảng Ràng buộc toàn vẹn thực thể {#bảng-3.12-bảng-ràng-buộc-toàn-vẹn-thực-thể}

##### **b) Ràng buộc toàn vẹn tham chiếu (Referential Integrity – Khóa ngoại)**

Mọi giá trị khóa ngoại (FK) phải tồn tại trong bảng gốc mà nó tham chiếu. Khi xóa bản ghi cha, hệ thống áp dụng chính sách ON DELETE RESTRICT để tránh mất dữ liệu không mong muốn.

| STT | Bảng con | Cột FK | Tham chiếu đến | Chính sách |
| :---- | :---- | :---- | :---- | :---- |
| 1 | NHAN\_VIEN | id\_coso | CO\_SO(id\_coso) | ON DELETE RESTRICT |
| 2 | SAN\_BONG | id\_coso | CO\_SO(id\_coso) | ON DELETE RESTRICT |
| 3 | DICH\_VU | id\_coso | CO\_SO(id\_coso) | ON DELETE RESTRICT |
| 4 | DON\_DAT\_SAN | id\_kh | KHACH\_HANG(id\_kh) | ON DELETE RESTRICT |
| 5 | DON\_DAT\_SAN | id\_san | SAN\_BONG(id\_san) | ON DELETE RESTRICT |
| 6 | DON\_DAT\_SAN | id\_km | KHUYEN\_MAI(id\_km) | ON DELETE SET NULL |
| 7 | HOA\_DON | id\_don | DON\_DAT\_SAN(id\_don) | ON DELETE RESTRICT |
| 8 | HOA\_DON | id\_nv | NHAN\_VIEN(id\_nv) | ON DELETE RESTRICT |
| 9 | CHI\_TIET\_HOA\_DON | id\_hd | HOA\_DON(id\_hd) | ON DELETE CASCADE |
| 10 | CHI\_TIET\_HOA\_DON | id\_dv | DICH\_VU(id\_dv) | ON DELETE RESTRICT |

##### 

##### Bảng 3.13 Bảng Ràng buộc toàn vẹn tham chiếu {#bảng-3.13-bảng-ràng-buộc-toàn-vẹn-tham-chiếu}

##### **c) Ràng buộc miền giá trị (Domain Constraint – CHECK)**

| STT | Bảng | Cột | Ràng buộc | Diễn giải |
| :---- | :---- | :---- | :---- | :---- |
| 1 | KHACH\_HANG | diem\_tich\_luy | CHECK (diem\_tich\_luy \>= 0\) | Điểm tích lũy không được âm. |
| 2 | SAN\_BONG | loai\_san | CHECK (loai\_san IN (5, 7, 11)) | Chỉ chấp nhận sân 5, 7 hoặc 11 người. |
| 3 | SAN\_BONG | gia\_thue\_cb, gia\_thue\_vang | CHECK (gia\_thue \> 0\) | Giá thuê phải lớn hơn 0\. |
| 4 | SAN\_BONG | trang\_thai | CHECK (trang\_thai IN ('Trống','Đã đặt','Đang sử dụng','Bảo trì')) | Chỉ nhận các trạng thái hợp lệ. |
| 5 | KHUYEN\_MAI | phan\_tram\_giam | CHECK (phan\_tram\_giam BETWEEN 0 AND 100\) | Tỷ lệ giảm từ 0% đến 100%. |
| 6 | KHUYEN\_MAI | so\_luot\_con\_lai | CHECK (so\_luot\_con\_lai \>= 0\) | Lượt sử dụng không được âm. |
| 7 | NHAN\_VIEN | ca\_lam\_viec | CHECK (ca\_lam\_viec IN ('Sáng','Chiều','Tối')) | Ca làm việc chỉ nhận giá trị hợp lệ. |
| 8 | HOA\_DON | tong\_tien, phu\_phi, so\_tien\_giam | CHECK (value \>= 0\) | Các giá trị tiền không được âm. |
| 9 | DICH\_VU | ton\_kho | CHECK (ton\_kho \>= 0\) | Tồn kho không được âm. |
| 10 | CHI\_TIET\_HOA\_DON | so\_luong | CHECK (so\_luong \> 0\) | Số lượng mua phải lớn hơn 0\. |

##### Bảng 3.14 Bảng Ràng buộc miền giá trị {#bảng-3.14-bảng-ràng-buộc-miền-giá-trị}

##### 

##### **d) Ràng buộc nghiệp vụ (Business Rules)**

| STT | Quy tắc | Mô tả | Áp dụng tại |
| :---- | :---- | :---- | :---- |
| 1 | **Thời gian đặt sân hợp lệ** | thoi\_gian\_bat\_dau phải sau thoi\_gian\_dat (không đặt sân trong quá khứ). | DON\_DAT\_SAN, kiểm tra tại tầng Business Logic |
| 2 | **Thứ tự thời gian ca chơi** | thoi\_gian\_ket\_thuc phải sau thoi\_gian\_bat\_dau ít nhất 30 phút. | DON\_DAT\_SAN |
| 3 | **Không trùng lịch sân** | Một sân không thể có 2 đơn đặt sân cùng khung giờ ở trạng thái hoạt động. | DON\_DAT\_SAN, kiểm tra trước khi INSERT |
| 4 | **Khuyến mãi đúng hạn** | Ngày áp dụng phải nằm trong khoảng \[ngay\_bat\_dau, ngay\_ket\_thuc\] và so\_luot\_con\_lai \> 0\. | KHUYEN\_MAI, kiểm tra tại Business Logic |
| 5 | **Thời hạn hủy đơn** | Khách hàng chỉ được hủy đơn trước giờ bắt đầu ca chơi ít nhất 2 tiếng. | DON\_DAT\_SAN, kiểm tra tại tầng Service |
| 6 | **Hóa đơn duy nhất mỗi đơn** | Mỗi DON\_DAT\_SAN chỉ sinh ra đúng một HOA\_DON (id\_don trong bảng HOA\_DON là UNIQUE). | HOA\_DON |
| 7 | **Nhất quán thành tiền** | thanh\_tien \= so\_luong × don\_gia phải được tính tự động và kiểm tra trước khi lưu. | CHI\_TIET\_HOA\_DON, kiểm tra tại Business Logic |
| 8 | **Trạng thái đơn theo luồng** | Trạng thái đơn chỉ được chuyển theo đúng thứ tự: Chờ xác nhận → Đã xác nhận → Đã check-in → Hoàn thành (hoặc Đã hủy). | DON\_DAT\_SAN, kiểm tra tại Business Logic |

##### Bảng 3.15 Bảng Ràng buộc nghiệp vụ {#bảng-3.15-bảng-ràng-buộc-nghiệp-vụ}

### **3.3.3. Thiết kế giao diện** {#3.3.3.-thiết-kế-giao-diện}

\*(Placeholder: Chèn hình ảnh wireframe/mockup giao diện hệ thống vào đây)\*

###### Hình 3.49 Wireframe/mockup giao diện hệ thống {#hình-3.49-wireframe/mockup-giao-diện-hệ-thống}

# **CHƯƠNG 4: TỰ NHẬN XÉT ĐÁNH GIÁ** {#chương-4:-tự-nhận-xét-đánh-giá}

## **4.1. Ưu điểm** {#4.1.-ưu-điểm}

Trong quá trình thực hiện đồ án môn học Phân tích Thiết kế Hệ thống, nhóm đã áp dụng được các kiến thức lý thuyết vào việc xây dựng một bộ tài liệu phân tích và thiết kế hoàn chỉnh cho một hệ thống thực tế. Cụ thể:  
Nhóm đã xác định rõ ràng các tác nhân, yêu cầu chức năng và phi chức năng thông qua quá trình khảo sát thực tế tại đơn vị kinh doanh sân bóng, từ đó xây dựng được bộ 17 yêu cầu chức năng (FR01–FR17) và chuyển hóa thành 15 Use Case có tính nhất quán cao. Hệ thống Use Case được mô tả chi tiết với đầy đủ luồng chính (Main Flow), luồng thay thế/ngoại lệ (Alternate/Exception Flow) và hậu điều kiện, thể hiện tư duy phân tích nghiệp vụ có chiều sâu.  
Sự liên kết (mapping) giữa các tầng tài liệu — từ Yêu cầu chức năng (FR) đến Use Case, Sơ đồ lớp, Sơ đồ thực thể (ERD) và Thiết kế cơ sở dữ liệu vật lý — được duy trì nhất quán xuyên suốt toàn bộ báo cáo. Đặc biệt, việc xử lý tình huống đồng thời (Concurrency) trong UC4 (Đặt sân) bằng cơ chế bảo lưu thông tin nhập và luồng nghiệp vụ thanh toán đa phương thức trong UC6 thể hiện khả năng phân tích sát với thực tế vận hành.

## **4.2. Nhược điểm** {#4.2.-nhược-điểm}

Bên cạnh những kết quả đạt được, nhóm cũng nhận thấy một số hạn chế trong quá trình thực hiện:  
Việc khảo sát hệ thống chủ yếu được thực hiện thông qua phỏng vấn trực tiếp với số lượng mẫu còn hạn chế (03 đối tượng), dẫn đến một số yêu cầu nghiệp vụ có thể chưa được khai thác toàn diện. Đặc biệt, các tình huống vận hành phức tạp như xử lý sự cố kỹ thuật phần cứng (đèn sân, máy quét QR) hay quy trình xử lý khiếu nại của khách hàng chưa được đặc tả đầy đủ.  
Ngoài ra, các thông số ràng buộc nghiệp vụ quan trọng như thời gian buffer giữa các ca chơi, ngưỡng thời gian tối thiểu được phép hủy đơn hay định mức phụ phí lấn giờ hiện đang được thiết lập dựa trên giả định hợp lý, chưa được hiệu chỉnh từ dữ liệu vận hành thực tế. Điều này có thể dẫn đến một số thông số chưa tối ưu khi đưa vào triển khai, cần được điều chỉnh lại sau giai đoạn thử nghiệm thực tế.

## **4.3. Hướng phát triển** {#4.3.-hướng-phát-triển}

Trong tương lai, nhóm định hướng hoàn thiện và mở rộng hệ thống theo các hướng sau:  
Trước tiên, nhóm mong muốn có cơ hội khảo sát sâu hơn với nhiều đơn vị kinh doanh sân bóng để thu thập thêm các tình huống nghiệp vụ thực tế, từ đó bổ sung và tinh chỉnh các luồng ngoại lệ còn thiếu, đặc biệt là các trường hợp tranh chấp đơn đặt sân và quy trình hoàn tiền.  
Về mặt kỹ thuật, hệ thống có thể được mở rộng tích hợp thêm: (1) Mô-đun khách hàng thân thiết với hệ thống điểm tích lũy đổi thưởng; (2) Tích hợp thông báo đẩy (Push Notification) qua ứng dụng di động để nhắc lịch đặt sân; (3) Hệ thống phân tích dữ liệu nâng cao (Analytics) giúp chủ sân dự báo lượng khách và tối ưu hóa giá theo cung cầu; (4) Tích hợp phần cứng IoT để tự động hóa việc bật/tắt đèn và thiết bị tại sân theo trạng thái đơn đặt. Nhóm cũng sẽ tiếp tục trau dồi kiến thức để triển khai hệ thống này thành một sản phẩm phần mềm thực tế hoàn chỉnh.

# **KẾT LUẬN** {#kết-luận}

Hệ thống Quản lý và Đặt sân bóng được xây dựng nhằm giải quyết các bài toán thực tiễn mà các đơn vị kinh doanh sân bóng mini đang gặp phải trong bối cảnh chuyển đổi số: quản lý lịch sân thủ công dễ xảy ra sai sót, thiếu kênh đặt sân trực tuyến cho khách hàng và không có công cụ tổng hợp doanh thu theo thời gian thực.  
Qua quá trình phân tích và thiết kế, báo cáo đã hệ thống hóa toàn bộ quy trình nghiệp vụ thành một bộ tài liệu kỹ thuật hoàn chỉnh, bao gồm: 17 yêu cầu chức năng chi tiết, 15 Use Case với đặc tả luồng sự kiện đầy đủ (bao gồm luồng thay thế và ngoại lệ), Sơ đồ hoạt động (Activity Diagram) và Sơ đồ tuần tự (Sequence Diagram) cho các nghiệp vụ cốt lõi, Sơ đồ lớp (Class Diagram) ở cả mức phân tích lẫn thiết kế, Sơ đồ Thực thể Liên kết (ERD) và Thiết kế cơ sở dữ liệu vật lý với đầy đủ ràng buộc toàn vẹn dữ liệu.  
Hệ thống được thiết kế hướng đến ba nhóm người dùng chính — Khách hàng, Nhân viên vận hành và Quản lý/Chủ sân — với phân quyền rõ ràng và trải nghiệm sử dụng phù hợp với từng vai trò. Các tính năng nổi bật như tra cứu lịch sân theo thời gian thực, cơ chế chống đặt trùng (Concurrency Control), xử lý thanh toán đa phương thức và dashboard thống kê doanh thu đa cơ sở sẽ giúp nâng cao đáng kể hiệu quả vận hành và trải nghiệm của tất cả các bên liên quan.  
Nhóm tin rằng nền tảng thiết kế đã được xây dựng trong báo cáo này là cơ sở vững chắc để tiến hành lập trình và triển khai hệ thống trong thực tế, đồng thời có đủ tính mở rộng để tích hợp thêm các tính năng mới trong tương lai theo nhu cầu phát triển của thị trường.
