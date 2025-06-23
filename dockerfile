FROM node:21

# Install OpenJDK 17
RUN apt-get update && \
    apt-get install -y openjdk-17-jdk

# Set JAVA_HOME
ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64

# Set PATH to include Allure
ENV PATH=$PATH:/path/to/allure/executable/directory

# Install Allure
RUN npm install -g allure-commandline

# Set PATH to include Allure
ENV PATH=$PATH:/usr/local/bin

# Verify installations
RUN java -version
RUN node -v

# Set JAVA_HOME and run allure --version
RUN export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64 && \
    allure --version

# Print PATH for debugging
RUN echo $PATH
