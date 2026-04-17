pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // This pulls your code from GitHub
                checkout scm
            }
        }
        stage('Build') {
            steps {
                echo 'Building Room Booking App...'
                // Since it's HTML/JS, we just verify the index.html exists
                sh 'ls -al' 
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                // Simple check to see if the file contains the title
                sh 'grep -q "Hotel Room Booking" index.html'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying to local folder...'
                // For a beginner, we "deploy" by moving it to a deployment folder
                sh 'mkdir -p deploy && cp -r * deploy/'
            }
        }
    }
}
