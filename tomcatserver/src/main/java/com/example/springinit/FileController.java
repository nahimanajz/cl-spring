package com.example.springinit;

import com.example.springinit.common.model.Medicine;
import com.example.springinit.common.util.CsvHelper;
import com.example.springinit.physician.model.Physician;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.List;

@RestController
public class FileController {
    private static final String MEDICINES_FILE = "medicines.csv";
    private static final String ASSETS_FOLDER = "/Users/janvier/IdeaProjects/springInit/tomcatserver/src/main/resources/assets/";

    @PostMapping("/upload")
    @ResponseStatus(HttpStatus.OK)

    public ResponseEntity<String> handleFileUpload(@RequestParam("medicines") MultipartFile file)  {

       try{
           if (!file.getContentType().equals("text/csv")) {
               return ResponseEntity.badRequest()
                       .body("Only CSV files are allowed");
           }

           InputStream inputStream = file.getInputStream();

           // Append to existing file if it exists
           if (Files.exists(Paths.get(ASSETS_FOLDER + MEDICINES_FILE))) {
               Files.write(Paths.get(ASSETS_FOLDER + MEDICINES_FILE), FileCopyUtils.copyToByteArray(inputStream),
                       StandardOpenOption.APPEND);
           } else {
               // Create new file if it doesn't exist
               OutputStream outputStream = new FileOutputStream(ASSETS_FOLDER + MEDICINES_FILE);
               FileCopyUtils.copy(inputStream, outputStream);
           }
       }catch (Exception ex) {
           System.out.println("Failing upload:"+ex.getMessage());
           return ResponseEntity.created(null).body(ex.getMessage());
       }
        return ResponseEntity.created(null).body("File uploaded successfully");
    }

    @GetMapping("/download/transcription")
    public ResponseEntity<byte[]> downloadFile() throws IOException {

        ClassPathResource resource = new ClassPathResource("assets/"+"prescription.csv");
        InputStream inputStream = resource.getInputStream();

        byte[] data = FileCopyUtils.copyToByteArray(inputStream);

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType("text/csv"))
                .header("Content-Disposition", "attachment; filename=" + MEDICINES_FILE)
                .body(data);
}
    @GetMapping("/all/medicines")
    public ResponseEntity<List<Medicine>> getAllMedicines(){
        return ResponseEntity.created(null).body(CsvHelper.getMedecines());
    }

}
