pipeline {
    agent any
    tools {
        maven 'Maven3' // Ensure 'Maven3' is configured in Jenkins Global Tool Configuration
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build & Test') {
            steps {
                echo 'Running Maven Build and JUnit Tests...'
                // 'mvn clean test' compiles the code and runs JUnit tests
                bat 'mvn clean test' 
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying Application...'
                bat 'if not exist C:\\RoomBooking_Deploy mkdir C:\\RoomBooking_Deploy'
                bat 'xcopy /y /s * C:\\RoomBooking_Deploy\\'
            }
        }
    }
}
