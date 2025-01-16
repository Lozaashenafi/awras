import 'package:awrasapp/widget/bottom_nav_bar.dart';
import 'package:flutter/material.dart';
import 'package:awrasapp/widget/bottom_nav_bar.dart';
import 'package:awrasapp/widget/button.dart';
import 'package:awrasapp/widget/course_box.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int _currentIndex = 0;

  void _onNavBarTap(int index) {
    setState(() {
      _currentIndex = index;
    });

    // Handle navigation or content switching here
    if (index == 0) {
      // Navigate to home content
    } else if (index == 1) {
      // Navigate to profile content
    } else if (index == 2) {
      // Navigate to courses content
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        leading: IconButton(
          icon: const Icon(Icons.menu),
          onPressed: () {
            // Open side drawer
          },
        ),
        title: Row(
          mainAxisAlignment: MainAxisAlignment.end,
          children: [
            Image.asset(
              "assets/images/awras.png", // Your logo asset
              height: 50,
            ),
          ],
        ),
      ),
      drawer: Drawer(
        child: ListView(
          children: [
            const DrawerHeader(
              decoration: BoxDecoration(color: Colors.blue),
              child: Text('Menu'),
            ),
            ListTile(
              title: const Text('Item 1'),
              onTap: () {
                // Handle navigation
              },
            ),
          ],
        ),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Greeting Box
            Container(
              width: 300,
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Colors.lightBlue.shade100,
                borderRadius: BorderRadius.circular(8),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    'Hello, Username!',
                    style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(
                      height: 8), // Add some spacing between the texts
                  const Text(
                    'Find your lesson today.',
                    style: TextStyle(
                        fontSize: 16,
                        color: Color.fromARGB(255, 151, 151, 151)),
                  ),
                  const SizedBox(height: 8),
                  CustomButton(
                    text: "Explore Courses",
                    onPressed: () {},
                  ),
                ],
              ),
            ),

            const SizedBox(height: 20),

            // Search Bar
            Row(
              children: [
                Expanded(
                  child: TextField(
                    decoration: InputDecoration(
                      hintText: 'Search for courses...',
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(8),
                      ),
                      suffixIcon: IconButton(
                        icon: const Icon(Icons.search),
                        onPressed: () {},
                      ),
                    ),
                  ),
                ),
              ],
            ),

            const SizedBox(height: 20),

            // Popular Courses Heading
            const Text(
              'Popular Courses',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 10),

            // Filter Options
            SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child: Row(
                children: [
                  FilterChip(label: const Text('All'), onSelected: (_) {}),
                  const SizedBox(width: 8),
                  FilterChip(
                      label: const Text('Web Development'), onSelected: (_) {}),
                  const SizedBox(width: 8),
                  FilterChip(
                      label: const Text('Web Design'), onSelected: (_) {}),
                  const SizedBox(width: 8),
                  FilterChip(label: const Text('Graphics'), onSelected: (_) {}),
                ],
              ),
            ),
            const SizedBox(height: 20),

            // Course Grid
            Expanded(
              child: GridView.builder(
                scrollDirection:
                    Axis.horizontal, // Set scroll direction to horizontal
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 1, // Only one row for horizontal sliding
                  crossAxisSpacing: 10,
                  mainAxisSpacing: 10,
                  childAspectRatio:
                      1.5, // Adjust aspect ratio for better visuals
                ),
                itemCount: 6, // Number of courses
                itemBuilder: (context, index) {
                  return CourseBox(
                    imageUrl: 'assets/images/class $index.png',
                    title: 'Course Title $index',
                    description: 'This is a short description of the course.',
                    price: 99.99,
                    rating: 4.5,
                  );
                },
              ),
            ),
          ],
        ),
      ),
      bottomNavigationBar: BottomNavBar(
        currentIndex: 0, // 0 for the Home tab
        onTap: (index) {
          if (index == 0) {
            Navigator.pushReplacementNamed(context, '/home'); // Home
          } else if (index == 1) {
            Navigator.pushReplacementNamed(context, '/courses'); // Courses
          }
        },
      ),
    );
  }
}
