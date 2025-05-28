# Docker Crash Course

This repository contains a Docker Crash Course following the course by [Net Ninja](https://youtube.com/playlist?list=PL4cUxeGkcC9hxjeEtdHFNYMtCpjNBm3h7&si=Vc7uYLtEEi1kod4f).

## Docker Images and Containers

### Docker Images

- **Image**: A read-only template used to create containers. It includes the application code, libraries, and dependencies.
  - Like blueprints for containers, defining what software and configurations are included.
  - Defines the environment in which a container runs, application code, any dependencies, and configurations (e.g. env variables), and commands to run.
  - Keep in mind that images are immutable, meaning they cannot be changed once created. If you need to make changes, you create a new image.
- **Base Image**: The starting point for building a Docker image, which can be an official image or a custom one.
- **Dockerfile**: A text file that contains instructions to build a Docker image. It specifies the base image, application code, dependencies, and configuration.
- **Docker Hub**: A public repository for Docker images where you can find official images and share your own.

### Docker Containers

- **Container**: A lightweight, standalone, executable package that includes everything needed to run a piece of software, including the code, runtime, libraries, and system tools.
  - Containers are instances of Docker images that can be run, stopped, and managed.
  - They are isolated from each other and the host system, ensuring that applications run consistently across different environments.
- **Running a Container**: When you run a Docker image, it creates a container based on that image. The container is an instance of the image and can be started, stopped, and managed independently.
- **Container Lifecycle**: Containers can be created, started, stopped, and removed. They can also be paused and resumed.
- **Container Orchestration**: Tools like Docker Compose and Kubernetes help manage multiple containers, allowing you to define and run multi-container applications.

### Example of Container in Action

**Image**:

```plaintext
Node 17
source code
dependencies
configurations
```

**Container**:

```plaintext
Running instance of the image
Runs our application
Isolated from the host system
Can be started, stopped, and managed independently
```

### Benefits of Using Docker

- **Portability**: Docker containers can run on any system that supports Docker, ensuring consistent behavior across different environments.
- **Isolation**: Each container runs in its own environment, preventing conflicts between applications and dependencies.
- **Scalability**: Docker makes it easy to scale applications by running multiple containers and managing them with orchestration tools.
- **Efficiency**: Containers share the host system's kernel, making them lightweight and fast to start compared to traditional virtual machines.

## Docker Images (continued)

Docker images are made up from several layers, each representing a change or addition to the image. When you build an image, Docker creates a new layer for each instruction in the Dockerfile. This layered architecture allows for efficient storage and sharing of images.

Each layer is cached, so if you rebuild an image with the same instructions, Docker can reuse the cached layers instead of rebuilding them from scratch. This speeds up the build process and reduces the amount of data that needs to be transferred when sharing images.

Typically, the first layer starts with what is known as a parent image, which typically contains the operating system and any necessary dependencies. From there, we can add our application code, libraries, and configurations to create a custom image.

The next layers are built on top of the parent image, adding our application code, dependencies, and configurations.

When we work with Docker, you'll also work with Docker Hub, which is a public repository for Docker images. You can find official images for popular software and libraries, as well as share your own images with the community.

We can get parent images from Docker Hub.
