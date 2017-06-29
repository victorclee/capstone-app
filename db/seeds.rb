Device.create!([
  {serial_number: "First", user_id: 2},
  {serial_number: "first one", user_id: 3},
  {serial_number: "GPS1", user_id: 6},
  {serial_number: "GPS002", user_id: 7},
  {serial_number: "GPS1111", user_id: 8},
  {serial_number: "", user_id: 9}
])
Location.create!([
  {lat: "75.0", long: "30.0", device_id: 3},
  {lat: "75.0", long: "30.0", device_id: 3},
  {lat: "41.854617", long: "-87.619647", device_id: 4},
  {lat: "3.0", long: "45.0", device_id: 4},
  {lat: "50.0", long: "60.0", device_id: 4},
  {lat: "20.0", long: "30.0", device_id: 4},
  {lat: "41.96838329", long: "-87.72329203", device_id: 4},
  {lat: "1.0", long: "2.0", device_id: 4}
])
User.create!([
  {first_name: "Aaron", last_name: "Ames", email: "aaron.ames@gmail.com", phone_number: "312-222-2222", address_1: "320 E 21st St", address_2: "Unit 202", city: "Chicago", state: "IL", zip: "60616", password_digest: "$2a$10$4EzdDGkZawWKhNlCVtXJ6eeFLn5Ku15tdvTqjm/RQZSRjd76jfM2i"},
  {first_name: "Bobby", last_name: "Bloosh", email: "bobby.bloosh@gmail.com", phone_number: "312-334-3321", address_1: "320 E 21st St", address_2: "Unit 203", city: "Chicago", state: "IL", zip: "60616", password_digest: "$2a$10$mTuyms.9V1pcySOoaN9u4.qdaLgJ6xRkETIkWoHs1O0FK2hglTJBq"},
  {first_name: "gqreg", last_name: "ergeqrt", email: "asdfaf@gmail.com", phone_number: "32332523", address_1: "320 E234 St", address_2: "unit 111", city: "Chicago", state: "IL", zip: "60616", password_digest: "$2a$10$hKBVjxMlGMHO6DxAejVt.u8WYGsiqfZ/d9Ch1Qox7T64Ch688/Xua"},
  {first_name: "Victor", last_name: "Lee", email: "victorchristopherlee@gmail.com", phone_number: "(312) 307-9070", address_1: "320 E 21st St", address_2: "Unit 510", city: "Chicago", state: "IL", zip: "60616", password_digest: "$2a$10$gKYgd3u.gzOytCbKWggzBektYtGqfybm/V4FE8LE3QyXHX4ZZjqsq"},
  {first_name: "Joe", last_name: "Cool", email: "joe.cool@gmail.com", phone_number: "(312) 307-2288", address_1: "320 E 21st St", address_2: "Unit 511", city: "Chicago", state: "IL", zip: "60616", password_digest: "$2a$10$lh4ekk7Wd4CHy8hG2Vw76eSbGZvxRBNbEjQWBEYIl.zdTHVHKl0lC"},
  {first_name: "Cody", last_name: "Chuchu", email: "cody.chuchu@gmail.com", phone_number: "3123458899", address_1: "213 E 3rd St", address_2: "Unit 674", city: "Chicago", state: "IL", zip: "60616", password_digest: "$2a$10$D3St.IM7VPntn./UmBipfeSweEZO7tK4oqgbN.24YTAiohXV4v6Ee"},
  {first_name: "Joe", last_name: "Cool", email: "joecool@gmail.com", phone_number: "312-345-7380", address_1: "320 E 21st St", address_2: "Unit 512", city: "Chicago", state: "IL", zip: "60616", password_digest: "$2a$10$dir2ULGTGGYKb8gBsTsmSe54nIhxtHI3oCjsHZXdnYX5FpXSOAKJy"},
  {first_name: "Kevin", last_name: "Hart", email: "kevinhart@gmail.com", phone_number: "", address_1: "", address_2: "", city: "", state: "", zip: "", password_digest: "$2a$10$dVHbUXSpRzekplDHABH3cec9a9EBWrg2yIdk.2Xi8f15el7ccrFMO"},
  {first_name: "Dave", last_name: "Chappelle", email: "davechappelle@gmail.com", phone_number: "", address_1: "", address_2: "", city: "", state: "", zip: "", password_digest: "$2a$10$.ZuNknxF89CjshQCAWTH6OgvblDUqXsM9qTk.Yr4t/xkxl2DHQ6tu"}
])
Zone.create!([
  {min_lat: "41.89244", max_lat: "41.891926", min_long: "-87.634658", max_long: "-87.634988", user_id: 2},
  {min_lat: "1.0", max_lat: "3.0", min_long: "4.0", max_long: "2.0", user_id: 3},
  {min_lat: "90.0", max_lat: "60.0", min_long: "50.0", max_long: "20.0", user_id: 6},
  {min_lat: "41.855456", max_lat: "41.854313", min_long: "-87.619003", max_long: "-87.620698", user_id: 7},
  {min_lat: "80.0", max_lat: "79.0", min_long: "-41.0", max_long: "-40.0", user_id: 7},
  {min_lat: "42.0", max_lat: "43.0", min_long: "-81.5", max_long: "-81.0", user_id: 7},
  {min_lat: "60.0", max_lat: "56.0", min_long: "36.0", max_long: "34.0", user_id: 7},
  {min_lat: "29.0", max_lat: "30.0", min_long: "6.0", max_long: "24.0", user_id: 7},
  {min_lat: "41.855488", max_lat: "41.854321", min_long: "-87.619046", max_long: "-87.620687", user_id: 7},
  {min_lat: nil, max_lat: nil, min_long: nil, max_long: nil, user_id: 7}
])
