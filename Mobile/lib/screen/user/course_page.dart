import 'package:flutter/material.dart';
import 'package:awrasapp/widget/bottom_nav_bar.dart';
import 'package:awrasapp/widget/course_box.dart';

class CoursePage extends StatefulWidget {
  @override
  _CoursePageState createState() => _CoursePageState();
}

class _CoursePageState extends State<CoursePage> {
  int _currentIndex = 2;
  String _selectedSort = 'Newest';
  String _selectedCategory = 'All';

  List<String> _categories = [
    'All',
    'Web Development',
    'Web Design',
    'Graphics'
  ];
  List<String> _sortOptions = ['Newest', 'Rating'];

  // Mock course data
  List<Map<String, dynamic>> _courses = [
    {
      'title': 'Web Dev Basics',
      'category': 'Web Development',
      'rating': 4.5,
      'date': DateTime(2023, 12, 10)
    },
    {
      'title': 'Advanced Graphics',
      'category': 'Graphics',
      'rating': 4.8,
      'date': DateTime(2024, 1, 5)
    },
    {
      'title': 'UI Design',
      'category': 'Web Design',
      'rating': 4.2,
      'date': DateTime(2024, 1, 1)
    },
    // Add more mock courses here
  ];

  List<Map<String, dynamic>> _filteredCourses = [];

  @override
  void initState() {
    super.initState();
    _applyFilters(); // Initialize with all courses
  }

  void _applyFilters() {
    setState(() {
      _filteredCourses = _courses.where((course) {
        if (_selectedCategory != 'All' &&
            course['category'] != _selectedCategory) {
          return false;
        }
        return true;
      }).toList();

      if (_selectedSort == 'Rating') {
        _filteredCourses.sort((a, b) => b['rating'].compareTo(a['rating']));
      } else if (_selectedSort == 'Newest') {
        _filteredCourses.sort((a, b) => b['date'].compareTo(a['date']));
      }
    });
  }

  void _onSortChange(String sortOption) {
    setState(() {
      _selectedSort = sortOption;
      _applyFilters();
    });
  }

  void _onCategoryChange(String category) {
    setState(() {
      _selectedCategory = category;
      _applyFilters();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        title: const Text('Courses', style: TextStyle(color: Colors.black)),
        iconTheme: const IconThemeData(color: Colors.black),
        elevation: 0,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
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

            // Sorting Options
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                // Filter Chips for Categories
                SingleChildScrollView(
                  scrollDirection: Axis.horizontal,
                  child: Row(
                    children: _categories.map((category) {
                      return Padding(
                        padding: const EdgeInsets.only(right: 8.0),
                        child: FilterChip(
                          label: Text(category),
                          selected: _selectedCategory == category,
                          onSelected: (_) => _onCategoryChange(category),
                        ),
                      );
                    }).toList(),
                  ),
                ),
                // Dropdown for Sorting
                DropdownButton<String>(
                  value: _selectedSort,
                  onChanged: (value) => _onSortChange(value!),
                  items: _sortOptions.map((option) {
                    return DropdownMenuItem(
                      value: option,
                      child: Text(option),
                    );
                  }).toList(),
                ),
              ],
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
                itemCount: _filteredCourses.length,
                itemBuilder: (context, index) {
                  final course = _filteredCourses[index];
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
        currentIndex: _currentIndex,
        onTap: (index) {
          if (index == 0) {
            Navigator.pushNamed(context, '/home');
          } else if (index == 1) {
            Navigator.pushNamed(context, '/courses');
          }
        },
      ),
    );
  }
}
