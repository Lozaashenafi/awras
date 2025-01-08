import 'package:awrasapp/widget/course_box.dart';
import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
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
              height: 40,
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
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Colors.lightBlue.shade100,
                borderRadius: BorderRadius.circular(8),
              ),
              child: const Text(
                'Hello, Username! Welcome back!',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
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
                    ),
                  ),
                ),
                const SizedBox(width: 10),
                ElevatedButton(
                  onPressed: () {
                    // Handle explore action
                  },
                  child: const Text('Explore'),
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
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 2,
                  crossAxisSpacing: 10,
                  mainAxisSpacing: 10,
                  childAspectRatio: 0.8,
                ),
                itemCount: 6, // Number of courses
                itemBuilder: (context, index) {
                  return CourseBox(
                    imageUrl: 'assets/course_image.png',
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
    );
  }
}
